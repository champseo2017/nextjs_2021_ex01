import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
const index = ({ services }) => {
  console.log('CLIENT', services)
  return (
    <div>
      <h1>Bye bye World</h1>
    </div>
  );
};

export default index;
export const getStaticProps = async (context: GetStaticPropsContext) => {
  // calculation
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  return {
    props: {
      services: data.services,
    },
  };
};
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // calculation
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
