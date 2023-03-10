import { Button } from "./LoadMoreButton.style";

export const LoadMoreButton = ({onLoadMore}) => {
    return <Button type="button" onClick={onLoadMore}>Load more</Button>
};