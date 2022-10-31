
import Link from "next/link";
export default function Button({href, styles, text}) {
  return (
    <Link href={href || ""}>
      <button className={`px-8 py-2 rounded-full  text-center text-base ${styles}`}>
        {text}
      </button>
    </Link>
  );
}
