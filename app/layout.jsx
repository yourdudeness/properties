import '@/assets/styles/global.css';

export const metadata = {
  title: 'Property | Find something',
  description: 'Find some appartment',
  keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
