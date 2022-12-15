import "./styles.css";
import React from 'react';
import { useRef, useState, useLayoutEffect, ReactNode, useEffect } from "react";

export function Map({
    step = 0,
    paddingRight = 24,
    paddingLeft = 24,
    background = "linear-gradient(90deg, #74c1f2, #3e86d9)",
    fontColor = "#000000",
    children
}: {
    step?: number;
    paddingRight?: number;
    paddingLeft?: number;
    background?: string;
    fontColor?: string;
    children: ReactNode[];
}) {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState("0");
    const [items, setItems] = useState<Element[]>([]);

    useEffect(() => {
        if (bodyRef.current) {
            setItems(Array.from(bodyRef.current.children));
        }
    }, []);

    useLayoutEffect(() => {
        items.forEach((x, i) => {
            if (i > 0) {
                x.className = i > step ? "not-good" : "";
            }

            (x as HTMLElement).style.paddingRight = `${paddingRight}px`;
            (x as HTMLElement).style.paddingLeft = `${paddingLeft}px`;
        });
    }, [paddingRight, paddingLeft, step, items]);

    useLayoutEffect(() => {
        const totalWidth = items
            .slice(step + 1)
            .map((i) => i.clientWidth)
            .reduce((acc: number, x: number) => acc + x, 0);

        setWidth(`calc(100% - ${totalWidth}px + 2px)`);

    }, [step, paddingRight, items]);

    return (
        <div className="container">
            <div
                className="background"
                style={{
                    width: width,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                    background: background
                }}
                ref={backgroundRef}
            />
            <div
                style={{
                    color: fontColor
                }}
                ref={bodyRef}
            >
                {children}
            </div>
        </div>
    );
}
