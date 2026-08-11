import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '会社概要｜AgentFunTech',
  openGraph: {
    title: '会社概要｜AgentFunTech',
  },
  alternates: {
    canonical: '/about',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="About" sub="会社概要" />
      <Sheet>{children}</Sheet>
    </>
  );
}
