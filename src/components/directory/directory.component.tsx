import React, { useEffect } from "react";

import "./directory.styles";
import {
  getDirectoriesAsync,
  selectDirectories,
} from "../../redux/directory/directory.slice";
import MenuItem from "../menu-item/menu-item.component";
import { Directory as DirectoryProps } from "../../redux/directory/directory.interface";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDirectoriesAsync());
  }, [dispatch]);
  const sections: DirectoryProps[] = useAppSelector(selectDirectories) || [];
  return (
    <DirectoryMenuContainer>
      {sections &&
        sections.map((item: DirectoryProps) => <MenuItem {...item} />)}
    </DirectoryMenuContainer>
  );
};

export default Directory;
