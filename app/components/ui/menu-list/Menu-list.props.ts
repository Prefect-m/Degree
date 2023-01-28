import { DetailsHTMLAttributes } from "react";
import { MenuItemProps } from "./menu-item/Menu-item.props";

export interface MenuListProps extends DetailsHTMLAttributes<HTMLUListElement> { data: MenuItemProps[] }