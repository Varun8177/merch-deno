import React from "react";

import { Box } from "@chakra-ui/react";

import NextSEO from "../components/NextSEO";
import ProductCard from "../components/ProductCart";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getProduct } from "@/redux/product/product.action";


export default function Home() {
  const products = useAppSelector(store => store.product.products)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(getProduct())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NextSEO
        title="homepage"
        description="Home page for my webpage"
        ogImage="/og-image.png"
        url={new URL("http://localhost:3000/")}
      />
      <main>
        <Box
          width="calc(11/12)%"
          maxWidth="5xl"
          mx="auto"
          mt="28"
          aria-labelledby="information-heading"
        >
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            }}
            gap={{ base: 8 }}
            rowGap={{ sm: "10", lg: "12" }}
            columnGap={{ lg: "10" }}
          >
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
}
