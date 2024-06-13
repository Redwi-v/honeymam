'use client'

import { ProductsApi } from "@/shared/api";
import { Notification } from "@/shared/ui.kit";
import { LikeButton } from "@/shared/ui.kit/like.button/ui/like.button";
import { FC, useState } from "react";
import { Store } from "react-notifications-component";
import { useMutation, useQueryClient } from "react-query";

interface AddToFavoriteButtonProps {
  id: string | number
  isFavorite: boolean
}
 
const AddToFavoriteButton: FC<AddToFavoriteButtonProps> = ({id, isFavorite }) => {

  const queryClient = useQueryClient()

  const favoriteState = useState( isFavorite )
  const setFavoriteMutation = useMutation({
    mutationFn: () => ProductsApi.toggleFavorite({id}),
    onSuccess: (res) => {
      favoriteState[1](res.data.is_favourite)
      Store.addNotification( {
        content: <Notification text={ res.data.is_favourite ? 'Товар добавлен в избранное' : 'Товар удалёен из избранного' } />,
        insert: "bottom",
        container: "bottom-center",
        animationIn: [ "animate__animated", "animate__bounceIn" ],
        animationOut: [ "animate__animated", "animate__fadeOut" ],
        dismiss: {
          duration: 1000,
          onScreen: false,
        }
      } )

      queryClient.refetchQueries({
        queryKey: ['favorites']
      })
    }
  })

  return ( 
    

    <LikeButton state = { favoriteState } onClick = { () => setFavoriteMutation.mutate() } isActive = { isFavorite } />

   );

}
 
export default AddToFavoriteButton;