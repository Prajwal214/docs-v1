import React from "react";
import { ReactComponent as OverviewIcon } from "../../images/icons/overview-icon.svg";
import styles from "./SideNav.module.css";
import ListItem from "./ListItem";
import classNames from "classnames";
import { ReactComponent as CollapseLeftIcon } from "../../images/icons/collapse-left.svg";
import { ReactComponent as CollapseRightIcon } from "../../images/icons/collapse-right.svg";
import { MenuItem } from "../../interface/common.interface";
import { isEmpty } from "lodash";
import SkeletonLoader from "../common/SkeletonLoader/SkeletonLoader";
import { SkeletonWidth } from "../../enums/SkeletonLoder.enum";

interface Props {
  category: string;
  collapsedNav: boolean;
  items: MenuItem[];
  handleCollapsedNav: (value: boolean) => void;
  loading: boolean;
}

export default function SideNav({
  category,
  collapsedNav,
  items,
  handleCollapsedNav,
  loading,
}: Props) {
  const toggleCollapse = () => {
    handleCollapsedNav(!collapsedNav);
  };

  return (
    <nav
      className={`${classNames(
        styles.SideNav,
        collapsedNav ? styles.CollapsedSideNav : styles.NonCollapsedSideNav
      )} left-nav`}
    >
      {loading ? (
        <SkeletonLoader
          className="w-full"
          title={false}
          paragraph={{ rows: 6, width: SkeletonWidth.DEFAULT }}
        />
      ) : (
        <div
          style={{
            display: collapsedNav ? "none" : "block",
          }}
        >
          <div className="flex items-center gap-2 px-1 mb-3">
            <OverviewIcon />
            <p className={styles.Heading}>{category}</p>
          </div>
          {isEmpty(items) ? (
            <div className={styles.NoDataPlaceholder}>
              No menu items for this category
            </div>
          ) : (
            <div className={classNames(styles.LinkContainer)}>
              {items.map((item) => (
                <ListItem item={item} key={item.name} fontWeight={400} />
              ))}
            </div>
          )}
        </div>
      )}
      <span className={styles.IconContainer}>
        {collapsedNav ? (
          <span title="Expand Menu">
            <CollapseRightIcon
              className={styles.CollapseIcon}
              onClick={toggleCollapse}
            />
          </span>
        ) : (
          <span title="Collapse Menu">
            <CollapseLeftIcon
              className={styles.CollapseIcon}
              onClick={toggleCollapse}
            />
          </span>
        )}
      </span>
    </nav>
  );
}