import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/Navbar';



export default function MainLayout({ children }) {
  return (
    <main>
      <NavBar />
      <div
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>

      <Footer />
    </main>
  );
}
