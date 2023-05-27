import styles from "../styles/Home.module.css";

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = async () => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
      uuid: await fetch("https://uuid.rocks/plain").then((response) =>
        response.text()
      ),
    },
  };
};

type Props = { runtime: string; uuid: string };

export default function Page({ runtime, uuid }: Props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">Next.js, running at the {runtime}!</a>
        </h1>

        <p className={styles.description}>
          Here&apos;s a server-side UUID:
          <code className={styles.code}>{uuid}</code>
        </p>
      </main>
    </div>
  );
}
