import { useEffect, useState } from "react";

/**
 * 
 * This simple hook makes it easy to share && render
 * components, logic, styling, etc. through the use of 
 * media queries from your TSX code.
 * 
 * Attribution:
 * - https://fireship.io/snippets/use-media-query-hook/
 * 
 * @param query The CSSMediaRule to test
 * @returns boolean
 */
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}