import sanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId:'vcmwh66j',
    dataset:'production',
    apiVersion:'2022-08-30',
    useCdn:true,
    token:"skA93QPkAtytnfqnA6sEmYLUrhB2xaRqZtX19nYBhyhLQCuqWEzi2JFdq3SBJ9B6eOtjykWB71nZHtdD4xZ1jU4Cl5hqyrL0cGUfUbNvp593ngu61eNAsdBxEXNAUgeeUnUeDimz1bDPlJ0bJbBsYjE0aNDluZts0txBjT2SxaKm0NWLeM5H",
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);