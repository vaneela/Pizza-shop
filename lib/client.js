import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url/";

export const client = sanityClient({
    projectId: "7bt0im84",
    dataset: "production",
    apiVersion: "2023-01-17",
    useCdn: true,
    token: "skAv7kZGaWLCUbMH0yUM7IADuhlnZYSUz5mcSILVnhAkvVQOArUbsBioGc6G1AVeL9eD9toxdTrBFGXGWWDAABpZHxUgqaO8VbiBVI75aU0NdQhu1nKdJg5whzKJGjBt9iM8MashbioOWS4VcNvGVmGK1W3wdk2CnRLw0zHnHDG5idjntyIv"
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);