"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

function FadeInStagger({ ...props }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px 0px 0px 0px" }}
            transition={{ staggerChildren: 0.15 }}
            {...props}
        />
    );
}
export const Wordmark: React.FC<{ className?: string }> = ({ className }) => {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 64 },
        visible: { opacity: 1, y: 0 },
    };
    const transition = {
        duration: 0.05,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 50,
    };

    return (
        <FadeInStagger className={className}>
            <svg
                width="1376"
                height="248"
                viewBox="0 0 1376 248"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={variants}
                    transition={transition}
                    d="M 236.404 143.4 L 220.204 189 A 182.531 182.531 0 0 0 202.777 181.345 A 140.518 140.518 0 0 0 188.104 176.7 A 123.257 123.257 0 0 0 169.847 173.546 A 158.128 158.128 0 0 0 154.204 172.8 A 95.335 95.335 0 0 0 110.689 182.655 A 96.791 96.791 0 0 0 83.704 203.1 A 100.413 100.413 0 0 0 59.907 247.225 Q 55.792 262.871 55.277 281.436 A 193.646 193.646 0 0 0 55.204 286.8 Q 55.204 319.2 67.204 345.6 A 111.382 111.382 0 0 0 84.664 373.064 A 97.652 97.652 0 0 0 100.504 387.6 A 80.782 80.782 0 0 0 143.521 402.956 A 101.435 101.435 0 0 0 150.604 403.2 Q 169.596 403.2 184.009 399.661 A 90.479 90.479 0 0 0 189.604 398.1 Q 205.741 393.02 224.259 383.475 A 302.916 302.916 0 0 0 224.404 383.4 L 241.204 429 A 171.224 171.224 0 0 1 213.502 441.04 A 205.744 205.744 0 0 1 199.504 445.2 Q 176.765 451.106 147.921 451.199 A 286.685 286.685 0 0 1 147.004 451.2 Q 102.604 451.2 69.304 430.5 Q 36.004 409.8 18.004 372.9 A 176.172 176.172 0 0 1 2.179 320.033 A 228.125 228.125 0 0 1 0.004 288 A 192.22 192.22 0 0 1 7.885 232.297 A 172.79 172.79 0 0 1 18.304 205.8 Q 36.604 168.6 70.804 146.7 A 138.405 138.405 0 0 1 128.812 126.174 A 177.651 177.651 0 0 1 151.204 124.8 A 247.854 247.854 0 0 1 173.098 125.719 Q 184.32 126.715 194.122 128.793 A 143.824 143.824 0 0 1 197.704 129.6 Q 217.804 134.4 236.404 143.4 Z"
                    fill="url(#paint4_linear_830_5782)"
                />
                <motion.path
                    variants={variants}
                    transition={transition}
                    d="M 358.204 444 L 304.204 444 L 304.204 132 L 356.404 132 L 356.404 199.8 Q 364.204 180 377.404 162.9 Q 390.604 145.8 410.404 135.3 A 88.901 88.901 0 0 1 438.481 126.156 A 116.756 116.756 0 0 1 456.604 124.8 Q 465.604 124.8 474.604 125.7 A 113.833 113.833 0 0 1 480.932 126.502 Q 483.931 126.973 486.495 127.575 A 52.9 52.9 0 0 1 489.604 128.4 L 473.404 184.2 A 58.576 58.576 0 0 0 460.531 180.526 Q 454.576 179.506 447.812 179.41 A 99.559 99.559 0 0 0 446.404 179.4 A 77.746 77.746 0 0 0 406.625 190.474 A 93.654 93.654 0 0 0 404.104 192 Q 384.004 204.6 371.104 231 A 115.924 115.924 0 0 0 362.285 256.856 Q 358.204 275.25 358.204 298.2 L 358.204 444 Z"
                    fill="url(#paint4_linear_830_5782)"
                />
                <motion.path
                    variants={variants}
                    transition={transition}
                    d="M 739.204 157.2 L 739.204 132 L 788.404 132 L 788.404 368.4 A 72.899 72.899 0 0 0 789.014 378.214 Q 791.005 392.817 799.504 398.1 Q 810.604 405 823.804 405 L 812.404 447 Q 754.804 447 742.804 400.2 A 127.843 127.843 0 0 1 724.146 420.756 A 170.989 170.989 0 0 1 705.304 435.3 A 89.569 89.569 0 0 1 675.584 447.921 Q 663.478 450.765 649.372 451.142 A 163.228 163.228 0 0 1 645.004 451.2 Q 606.004 451.2 574.204 431.4 A 137.682 137.682 0 0 1 529.725 386.241 A 167.536 167.536 0 0 1 523.504 375.3 A 163.366 163.366 0 0 1 507.723 327.646 A 219.864 219.864 0 0 1 504.604 289.8 A 198.852 198.852 0 0 1 510.584 240.188 A 167.808 167.808 0 0 1 523.504 205.8 Q 542.404 168.6 575.704 146.7 A 133.784 133.784 0 0 1 642.872 125.062 A 164.326 164.326 0 0 1 652.204 124.8 A 135.505 135.505 0 0 1 680.965 127.743 A 112.218 112.218 0 0 1 701.104 134.1 A 156.011 156.011 0 0 1 726.824 147.862 A 132.618 132.618 0 0 1 739.204 157.2 Z M 734.404 364.2 L 734.404 196.8 Q 718.204 185.4 698.704 178.5 Q 679.204 171.6 657.604 171.6 A 95.547 95.547 0 0 0 627.777 176.123 A 84.141 84.141 0 0 0 606.904 186.3 A 97.804 97.804 0 0 0 576.789 218.843 A 119.775 119.775 0 0 0 572.404 227.1 Q 559.804 253.2 559.804 288 Q 559.804 321.6 572.404 347.7 A 105.61 105.61 0 0 0 591.037 374.976 A 94.179 94.179 0 0 0 607.204 388.5 Q 629.404 403.2 657.004 403.2 Q 679.804 403.2 700.204 392.1 Q 720.604 381 734.404 364.2 Z"
                    fill="url(#paint3_linear_830_5782)"
                />
                <motion.path
                    variants={variants}
                    transition={transition}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M 1105.204 143.4 L 1089.004 189 A 182.531 182.531 0 0 0 1071.577 181.345 A 140.518 140.518 0 0 0 1056.904 176.7 A 123.257 123.257 0 0 0 1038.647 173.546 A 158.128 158.128 0 0 0 1023.004 172.8 A 95.335 95.335 0 0 0 979.489 182.655 A 96.791 96.791 0 0 0 952.504 203.1 A 100.413 100.413 0 0 0 928.707 247.225 Q 924.592 262.871 924.077 281.436 A 193.646 193.646 0 0 0 924.004 286.8 Q 924.004 319.2 936.004 345.6 A 111.382 111.382 0 0 0 953.464 373.064 A 97.652 97.652 0 0 0 969.304 387.6 A 80.782 80.782 0 0 0 1012.321 402.956 A 101.435 101.435 0 0 0 1019.404 403.2 Q 1038.396 403.2 1052.809 399.661 A 90.479 90.479 0 0 0 1058.404 398.1 Q 1074.541 393.02 1093.059 383.475 A 302.916 302.916 0 0 0 1093.204 383.4 L 1110.004 429 A 171.224 171.224 0 0 1 1082.302 441.04 A 205.744 205.744 0 0 1 1068.304 445.2 Q 1045.565 451.106 1016.721 451.199 A 286.685 286.685 0 0 1 1015.804 451.2 Q 971.404 451.2 938.104 430.5 Q 904.804 409.8 886.804 372.9 A 176.172 176.172 0 0 1 870.979 320.033 A 228.125 228.125 0 0 1 868.804 288 A 192.22 192.22 0 0 1 876.685 232.297 A 172.79 172.79 0 0 1 887.104 205.8 Q 905.404 168.6 939.604 146.7 A 138.405 138.405 0 0 1 997.612 126.174 A 177.651 177.651 0 0 1 1020.004 124.8 A 247.854 247.854 0 0 1 1041.898 125.719 Q 1053.12 126.715 1062.922 128.793 A 143.824 143.824 0 0 1 1066.504 129.6 Q 1086.604 134.4 1105.204 143.4 Z"
                    fill="url(#paint2_linear_830_5782)"
                />
                <motion.path
                    variants={variants}
                    transition={transition}
                    d="M 1425.604 414 L 1388.404 450 L 1227.004 283.8 L 1227.004 444 L 1173.004 444 L 1173.004 0 L 1227.004 0 L 1227.004 253.8 L 1368.004 126 L 1399.204 160.2 L 1278.604 267 L 1425.604 414 Z"
                    fill="url(#paint1_linear_830_5782)"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient
                            id="paint0_linear_830_5782"
                            x1="-243.049"
                            y1="-228.123"
                            x2="-150.186"
                            y2="402.501"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stop-opacity="0.4" />
                            <stop
                                offset="0.693236"
                                stopColor="white"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_830_5782"
                            x1="-243.049"
                            y1="-228.123"
                            x2="-150.186"
                            y2="402.501"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stop-opacity="0.4" />
                            <stop
                                offset="0.693236"
                                stopColor="white"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_830_5782"
                            x1="-243.049"
                            y1="-228.123"
                            x2="-150.186"
                            y2="402.501"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stop-opacity="0.4" />
                            <stop
                                offset="0.693236"
                                stopColor="white"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_830_5782"
                            x1="-243.049"
                            y1="-228.123"
                            x2="-150.186"
                            y2="402.501"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stop-opacity="0.4" />
                            <stop
                                offset="0.693236"
                                stopColor="white"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_830_5782"
                            x1="-243.049"
                            y1="-228.123"
                            x2="-150.186"
                            y2="402.501"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stop-opacity="0.4" />
                            <stop
                                offset="0.693236"
                                stopColor="white"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </svg>
        </FadeInStagger>
    );
};
