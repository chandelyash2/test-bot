"use client";
import { useTelegram } from "@/lib/TelegramProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../Quest";

export interface LayoutProp {
  children: React.ReactNode;
}
interface EnrichedChildren {
  authUser?: User;
  children?: React.ReactNode;
}
function recursiveMap(
  children: React.ReactNode,
  fn: (child: React.ReactElement) => React.ReactElement<EnrichedChildren>
) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement<EnrichedChildren>(child)) {
      return child;
    }

    let elementChild: React.ReactElement<EnrichedChildren> = child;

    if (child.props.children) {
      elementChild = React.cloneElement(elementChild, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    if (typeof elementChild.type === "string") {
      return elementChild;
    }

    return fn(elementChild);
  });
}
export const Auth = ({children}:LayoutProp) => {
  const { user } = useTelegram();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const fetchUserInfo = async () => {
    if (user) {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/userInfo`,
        {
          params: {
            userId: user.id,
          },
        }
      );
      setUserInfo(data.data);
    }
  };
  if (userInfo) {
    // Add authUser prop to all child elements.
    const childrenWithProps = recursiveMap(children, (child) =>
      React.cloneElement(child, { userInfo })
    );
    return <>{childrenWithProps}</>;
  }
  return <div>Auth</div>;
};
