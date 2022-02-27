import { staticRequest } from "tinacms";
import { Components, TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";

const query = `{
  getPageDocument(relativePath: "home.mdx"){
    data{
      body
    }
  }
}`;

const Cta = (props) => {
  return <h2>{props.heading}</h2>;
};

const components = {
  Cta,
};

interface TinaProps {
  data: any;
}

const Home: React.FC<TinaProps> = (props) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  const content = data.getPageDocument.data.body;
  return (
    <Layout>
      <TinaMarkdown content={content} components={components} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const variables = {};
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
