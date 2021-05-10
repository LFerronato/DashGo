import SEO from "@/components/SEO";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, [])
  return (
    <>
      <SEO title="404" />
      <h1>Carregando</h1>
    </>
  );
}

export default NotFound;
