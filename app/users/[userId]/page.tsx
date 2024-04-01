interface PageProps {
  params: {
    userId: string;
  };
}

const Page = (props: PageProps) => {
  console.log(props.params);
  return <div>{props.params.userId}</div>;
};

export default Page;
