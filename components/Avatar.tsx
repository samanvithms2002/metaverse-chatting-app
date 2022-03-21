import Image from 'next/image'
import { useMoralis } from 'react-moralis'
interface AvatarProps {
  userName?: string
  logoutOnPress?: Boolean
}
export function Avatar({ userName, logoutOnPress }: AvatarProps) {
  const { user, logout } = useMoralis()
  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${
        userName || user?.getUsername()
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  )
}

export default Avatar
