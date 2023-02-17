import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    blocks: [
      {type: 'text'},
      {type: 'text'},
      {type: 'text'},
    ]
  })
}

export default function Index() {
  const { blocks } = useLoaderData();
  console.log(blocks);
  return (
    <main >   
    </main>
  );
}
