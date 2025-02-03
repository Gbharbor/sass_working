import { Photo } from "@/types/mod3/c17,18&19"
export type Props = {
    photo: Photo;
    onClick: () => void;
}
export const PhotoItem = ({photo,onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="" className="w-full" />
        </div>
    )
}