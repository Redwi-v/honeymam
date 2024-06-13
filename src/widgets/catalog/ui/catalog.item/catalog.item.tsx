
import Link from "next/link";
import s from '../catalog.module.scss'
import Image from "next/image";
import { LikeButton } from "@/shared/ui.kit/like.button/ui/like.button";
import { Badge } from "../badge";
import { Counter, H2, P } from "@/shared/ui.kit";
import { StickImage } from "@/app/_images/stick";
import { IProduct } from "@/shared/api";
import { FC } from "react";
import AddToFavoriteButton from "./add.to.favorite.button";

export const CatalogItem: FC<IProduct> = ( { image, title, description, price, discount, badge, raw_price,is_favourite, id } ) => (

  <li className={ s.item }>

    <div className={ s.preview }>

      <Link href={ `/product/${ id }` } scroll={true}>
        <Image fill src={ image } alt="product preview" />
      </Link>

      <AddToFavoriteButton id={id} isFavorite = { is_favourite }/>

      <Badge badge={ badge } />

    </div>

    <div className={ s.main_info }>

      <Link className={ s.top } href={ `/product/${ id }` } scroll={true}>

        <H2 className={ `${ s.item_title } ` }>{ title }</H2>

        <P className={ s.item_description }>
          { description }
        </P>

      </Link>


      <div className={ s.bottom }>

        <div className={ s.price }>

          <P className={ s.price_value }>{ price }  ₽</P>
          { discount && <P className={ s.old_price }>
            <StickImage />
            { raw_price } ₽
          </P> }

        </div>

        <Counter />

      </div>

    </div>

  </li>
)