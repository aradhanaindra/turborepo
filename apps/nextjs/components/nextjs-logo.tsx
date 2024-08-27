"use client"
import { motion } from "framer-motion"
const NextJSLogo = () => {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
            transition: { duration: 4 }
        }
    }

    return (
        <div className="w-32 h-32">
            <svg width="143" height="143" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1088_364)">
                    <motion.path variants={icon} d="M71.1045 142.217C110.357 142.217 142.178 110.396 142.178 71.1435C142.178 31.8909 110.357 0.0703125 71.1045 0.0703125C31.8518 0.0703125 0.03125 31.8909 0.03125 71.1435C0.03125 110.396 31.8518 142.217 71.1045 142.217Z" fill="white" />
                    <motion.path variants={icon} d="M118.095 124.461L54.6288 42.7109H42.6719V99.5462H52.2379V54.8589L110.585 130.245C113.214 128.486 115.723 126.554 118.095 124.461Z" fill="url(#paint0_linear_1088_364)" />
                    <motion.path variants={icon} d="M90.8477 42.7109H100.324V99.5695H90.8477V42.7109Z" fill="url(#paint1_linear_1088_364)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1088_364" x1="86.1054" y1="92.0672" x2="114.14" y2="126.814" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1088_364" x1="95.5855" y1="42.7109" x2="95.4267" y2="84.4663" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <motion.clipPath variants={icon} id="clip0_1088_364">
                        <rect width="142.146" height="142.146" fill="white" transform="translate(0.03125 0.0703125)" />
                    </motion.clipPath>
                </defs>
            </svg>

        </div>
    )
}

export default NextJSLogo;