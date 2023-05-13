import Stripe from "stripe";


const stripe = new Stripe(`${process.env.stripeKey}`);

export default async function handler(req, res){
    if(req.method == "POST"){
        try {
            const params = {
                submit_type : "pay",
                mode : "payment",
                payment_method_types : ["card"],
                line_items : req.body.map((item) => {
                    const img = item.image.asset._ref;
                    console.log(img);
                    const newImg = img.replace(
                        "image-", 
                        "https://cdn.sanity.io./images/7bt0im84/production/"
                    ).replace("-jpg", ".jpg");
                    console.log(newImg);
                    return {
                        price_data : {
                            currency : "inr",
                            product_data: {
                                name: item.name,
                                images: [newImg]
                            },
                            unit_amount: item.price*100
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity : item.quantity,
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            }
            try{
            const session = await stripe.checkout.sessions.create(params);
            console.log(session);
            res.status(200).json(session);
            }catch(e){
                console.log("Error here: " + e.message);
            }

            

        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    else{
        res.setHeader('Allow', 'POST');
        res.status(405).end("Method Not Allowed");
    }
}