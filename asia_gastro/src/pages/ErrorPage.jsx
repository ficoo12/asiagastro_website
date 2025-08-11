import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Došlo je do greške!</h1>
        <p>Tražena stranica nije pronađena!</p>
      </main>
    </>
  );
}
export default ErrorPage;
