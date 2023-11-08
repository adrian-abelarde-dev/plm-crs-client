import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        <Link href='/login'>Go to Log In page</Link>
      </p>
    </div>
  );
}
