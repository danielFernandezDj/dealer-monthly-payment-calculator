import Link from "next/link"

type LogButtonsProps = {
  isSignedIn: boolean
}

export default function LogButtons({ isSignedIn }: LogButtonsProps) {
  if (isSignedIn) {
    return <span className="font-semibold text-white">Signed in</span>
  }

  return (
    <div className="flex gap-4">
      <Link
        href="/auth/sign-in"
        className="rounded-lg border-2 px-4 py-2 font-semibold text-white hover:text-gray-300"
      >
        Sign-in
      </Link>
      <Link
        href="/auth/sign-up"
        className="rounded-lg border-2 px-4 py-2 font-semibold text-white hover:text-gray-300"
      >
        Sign-up
      </Link>
    </div>
  )
}
