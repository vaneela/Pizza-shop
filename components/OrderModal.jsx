import { Modal, useMantineTheme } from '@mantine/core';
import css from "../styles/OrderModal.module.css";
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';

export default function OrderModal({opened, setPaymentMethod, PaymentMethod}) {

    const router = useRouter();
    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({})

    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name] : e.target.value})
    }

    const resetCart = useStore((state) => state.resetCart);

    const total = typeof window !== 'undefined' && localStorage.getItem('total');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({...FormData, total, PaymentMethod});
        toast.success("Order placed successfully");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem("order", id)
        }
        router.push(`/order/${id}`)
    }


    return (
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened = {opened}
        onClose = {() => setPaymentMethod(null)}
        >
        {/* Modal content */}

        <form action="" className={css.formContainer}>

            <input onChange={handleInput} name="name" type="text" required placeholder="John Doe"></input>
            <input onChange={handleInput} name="phone" type="text" required placeholder="+91 1234567898"></input>
            <textarea onChange={handleInput} name="address" placeholder="address" rows = "3"></textarea>

            <span>You have to pay <span>₹ {total}</span> on delivery</span>
            <button onClick={handleSubmit} type="submit" className='btn'>Place Order</button>
        </form>
    <Toaster />
    </Modal>
    );
};
