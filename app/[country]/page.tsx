"use client";

import ReactQueryAction from "@/hooks/use-react-query-action";
import React from "react";

type Props = {
  params: {
    article: string;
  };
};

const ArticleDetails = ({ params: { article } }: Props) => {
  const { data } = ReactQueryAction(
    "https://freetestapi.com/api/v1/countries/[country]",
  );
  console.log("🙌 ~ page.tsx:13 -> data: ", data);

  return <div>{article}</div>;
};

export default ArticleDetails;
