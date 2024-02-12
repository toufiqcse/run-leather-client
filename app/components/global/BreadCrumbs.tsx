import Link from "next/link";
const BreadCrumb = ({
  category_name,
  category,
}: {
  category_name: string;
  category?: string;
}) => {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <div className="text-sm breadcrumbs  ">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          {category && (
            <li>
              <Link href={"/"}>{category}</Link>
            </li>
          )}
          <li>
            <Link href={"/"}>{category_name}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BreadCrumb;
