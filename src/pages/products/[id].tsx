import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductsAPI, getSingleProductAPI } from "@/redux/product/product.api";
import { getProduct } from "@/redux/product/product.action";
import { Product } from "@/utils/types";



const Prodcut = ({ product }: { product: Product }) => {
    return (
        <>
            <NextSEO
                title="homepage"
                description="Home page for my webpage"
                ogImage="/og-image.png"
                url={new URL("http://localhost:3000/")}
            />
            <Box
                w="calc(11/12)%"
                mt="16"
                maxW="5xl"
                mx="auto"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                position="relative"
            >
                <Link href="/">
                    <Text
                        display="flex"
                        alignItems="center"
                        gap={2}
                        textColor="gray.400"
                        transition="text-color"
                        transitionDuration="200s"
                        _hover={{
                            textColor: "gray.800",
                        }}
                    >
                        <MdKeyboardBackspace />
                        Back to shop
                    </Text>
                </Link>
            </Box>
            <ProductDetails product={product} />
        </>
    );
};

export default Prodcut;


export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getProductsAPI()

    const paths = data.map((item: Product) => ({
        params: { id: String(item.id) },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    let id: any = ctx.params?.id
    const data = await getSingleProductAPI(id)

    return {
        props: {
            product: data,
        }
    }
}