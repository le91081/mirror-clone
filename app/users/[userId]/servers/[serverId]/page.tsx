interface PageProps {
  params: {
    serverId: string;
  };
}

const Page = (props: PageProps) => {
  console.log(props);
  return <div>server</div>;
};

export default Page;
