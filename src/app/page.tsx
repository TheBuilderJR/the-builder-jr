export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="max-w-xl text-gray-900">
        Welcome to{" "}
        <a
          className="inline-block text-blue-500"
          href="https://twitter.com/TheBuilderJR"
        >
          {"@TheBuilderJR's"}
        </a>{" "}
        experimental projects website. All of these projects are open source and
        the code can be inspected in the following{" "}
        <a
          className="inline-block text-blue-500"
          href="https://github.com/TheBuilderJR/the-builder-jr"
        >
          github repository
        </a>
        .
      </div>
    </main>
  );
}
