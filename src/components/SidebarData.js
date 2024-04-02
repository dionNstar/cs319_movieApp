import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as DashIons from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiAuctionFill } from "react-icons/ri";



export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ประมูล',
    path: '/auction',
    icon: <RiAuctionFill />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
 
  {
    title: 'Emergency Call',
    path: '/emergency_call',
    icon: <BiPhoneCall />,
    cName: 'nav-text'
  },
  {
    title: 'Profiles',
    path: '/profile',
    icon: <CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Sign In',
    path: '/sign_is',
    icon: <FaIcons.FaLock />,
    cName: 'nav-text'
  }
];
