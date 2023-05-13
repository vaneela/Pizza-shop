import css from '../styles/Header.module.css';
import Image from 'next/image';
import logo from "../assets/Logo.png";
import {UilShoppingBag, UilReceipt} from "@iconscout/react-unicons";
import Link from "next/link";
import { useStore } from '../store/store';
import { useState } from 'react';
import { useEffect } from "react";

export default function Header() {
    const [Order, setOrder] = useState("");

    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, [])

    const items = useStore((state) => state.cart.pizzas.length)
    return (
    <div className={css.header}>
        {/* LOGO */}

        <div className={css.logo}> 
            <Image src={logo} alt="" width="50" height="50"></Image>
            <span>FOOD WEBSITE</span>
        </div>

        {/* MENU */}

        <ul className={css.menu}>
            <Link href= {`/`}>
            <li>Home</li>
            </Link>
            <Link href= {`/#menu`}>
            <li>Menu</li>
            </Link>
            <li>Contact</li>
        </ul>

        {/* CART */}
        <div className={css.cart}>
        <Link href= "../cart">
            <div className={css.bag}>
                <UilShoppingBag size="35" color="2E2E2E"/>
                <div className={css.badge}>{items}</div>
            </div>
        </Link>
        {
            Order &&
            (
                <Link href={`/order/${Order}`} >
                <div className={css.bag}>
                <UilReceipt size="35" color="2E2E2E"/>
                {Order != "" && <div className={css.badge}>1</div>}
            </div>
                </Link>
            )
        }
        </div>
    </div>
    );
};
