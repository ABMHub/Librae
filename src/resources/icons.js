import { SvgXml } from 'react-native-svg';

export function GetIcon({width, height, icon_name, style}) {
    let image_icon
    switch(icon_name)
    {
        case "opened_book":
            image_icon=(`
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_254_1651)">
                <path d="M29.0001 10.2425H0V50.4722H29.0001V10.2425Z" fill="#3A5569"/>
                <path d="M58.0001 10.2425H29V50.4722H58.0001V10.2425Z" fill="#3A5569"/>
                <path d="M25.6682 7.52771H2.71497V46.5235H25.298C25.298 46.5235 29.0001 47.0172 29.0001 50.4724V46.5235V43.3149V10.8596C29.0001 9.00856 27.5192 7.52771 25.6682 7.52771Z" fill="#F2EEED"/>
                <path d="M32.3319 7.52771H55.2851V46.5235H32.7021C32.7021 46.5235 29 47.0172 29 50.4724V46.5235V43.3149V10.8596C29 9.00856 30.4809 7.52771 32.3319 7.52771Z" fill="#E2E1E0"/>
                <path d="M24.0639 12.4638H7.4043V13.5744H24.0639V12.4638Z" fill="#E0E0DF"/>
                <path d="M14.5618 16.2894H7.4043V17.4H14.5618V16.2894Z" fill="#FEC656"/>
                <path d="M14.5618 20.1149H7.4043V21.2256H14.5618V20.1149Z" fill="#E0E0DF"/>
                <path d="M14.5618 23.9404H7.4043V25.051H14.5618V23.9404Z" fill="#E0E0DF"/>
                <path d="M24.0639 27.8894H7.4043V29H24.0639V27.8894Z" fill="#E0E0DF"/>
                <path d="M24.0639 31.7148H7.4043V32.8255H24.0639V31.7148Z" fill="#E0E0DF"/>
                <path d="M24.0639 35.5404H7.4043V36.651H24.0639V35.5404Z" fill="#E0E0DF"/>
                <path d="M24.0639 39.366H7.4043V40.4767H24.0639V39.366Z" fill="#E0E0DF"/>
                <path d="M23.9404 16.2894H17.2766V25.051H23.9404V16.2894Z" fill="#F16D6E"/>
                <path d="M50.4725 12.4638H33.8129V13.5744H50.4725V12.4638Z" fill="#CCC4C4"/>
                <path d="M50.4725 27.8894H33.8129V29H50.4725V27.8894Z" fill="#CCC4C4"/>
                <path d="M50.4725 39.366H33.8129V40.4767H50.4725V39.366Z" fill="#CCC4C4"/>
                <path d="M50.349 16.2894H43.6852V25.051H50.349V16.2894Z" fill="#E0BBA6"/>
                <path d="M50.4725 31.0979H33.8129V37.2681H50.4725V31.0979Z" fill="#F7B044"/>
                <path d="M40.4767 16.2894H33.8129V25.051H40.4767V16.2894Z" fill="#E0BBA6"/>
                </g>
                <defs>
                <clipPath id="clip0_254_1651">
                <rect width="58" height="58" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            `)
            break
        case "closed_book":
            image_icon=(`
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.0403 55.1363H16.3941C15.6419 55.1363 15.8231 54.5245 15.8231 53.7723V6.36641C15.8231 5.61422 16.4348 5.0025 17.187 5.0025H48.6158C49.8483 5.0025 50.8497 6.00391 50.8497 7.23641V52.4402C50.8497 54.1892 50.0205 55.1363 48.0403 55.1363Z" fill="#C62828"/>
                <path d="M8.39636 52.1728C8.39636 53.0519 9.78746 53.7905 10.6665 53.7905L47.0932 53.7678C48.4436 53.7678 49.1504 53.0519 49.1504 52.1728L49.0371 42.5122H8.39636V52.1728V52.1728Z" fill="#94C6D6"/>
                <path d="M45.9786 47.9769C45.9786 47.9769 45.0134 50.6276 45.9922 51.9553C47.1295 53.4959 49.1142 53.1244 49.1142 52.4039V7.44936C49.1142 7.1503 48.8378 6.9328 48.5478 6.99624C47.918 7.13218 46.7851 7.13671 45.2808 6.13983L45.9786 47.9769V47.9769Z" fill="#F5F5F5"/>
                <path d="M42.6663 50.2289H10.7119V2.92267H43.4502C44.4788 2.92267 45.2038 3.19907 45.5436 3.65673C45.9877 4.25032 46.2233 5.15204 46.2233 6.13986V46.6719C46.2233 47.6153 45.8486 48.52 45.1815 49.1871C44.5144 49.8542 43.6097 50.2289 42.6663 50.2289Z" fill="#C62828"/>
                <path d="M41.6921 48.8378H11.5729C10.3222 48.8378 9.31177 47.8228 9.31177 46.5767V5.18828C9.31177 3.93765 10.3268 2.92719 11.5729 2.92719H41.6921C43.423 2.92719 44.8277 3.915 44.8277 6.06281V45.7067C44.8232 47.4331 43.423 48.8378 41.6921 48.8378V48.8378Z" fill="#F44336"/>
                <path d="M15.6011 49.7305L15.5784 2.92717H10.5034C10.5034 2.92717 9.45669 2.74592 8.75888 2.92717C7.49466 3.25796 7.14575 4.1778 7.14575 5.67764V48.4572C7.14575 51.4931 7.33153 52.8072 8.25138 53.7678C8.197 53.07 8.6456 50.673 9.01263 50.0159C9.33888 49.4359 15.6011 49.7305 15.6011 49.7305Z" fill="#616161"/>
                <path d="M10.5034 2.92267V50.2289" stroke="#424242" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M15.5784 49.5447L10.4581 49.6444C8.74985 49.6444 8.16531 51.475 8.46891 52.6848C8.84953 54.2119 10.4264 54.4611 10.8161 54.4611H16.5481" stroke="#424242" stroke-width="3" stroke-miterlimit="10"/>
                </svg>
            `)
            break

        case "green_gradient":
            image_icon=(`
            <svg width="315" height="58" viewBox="0 0 315 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="315" height="58" rx="16" fill="url(#paint0_linear_293_1407)"/>
            <defs>
            <linearGradient id="paint0_linear_293_1407" x1="41.5" y1="-16.5" x2="40.9274" y2="74.1748" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6CFF6C"/>
            <stop offset="1" stop-color="#14BD14"/>
            </linearGradient>
            </defs>
            </svg>
            `)
            break
        case "little_green_gradient":
            image_icon=(`
                <svg width="163" height="50" viewBox="0 0 163 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="163" height="50" rx="16" fill="url(#paint0_linear_315_831)"/>
                <defs>
                <linearGradient id="paint0_linear_315_831" x1="21.4746" y1="-14.2241" x2="20.6523" y2="63.9382" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6CFF6C"/>
                <stop offset="1" stop-color="#14BD14"/>
                </linearGradient>
                </defs>
                </svg>
            `)
            break
        case "little_gray_gradient":
            image_icon=(`
                <svg width="163" height="50" viewBox="0 0 163 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="163" height="50" rx="16" fill="#E0E6F3"/>
                </svg>
            `)
            break
    }

    return(
        <SvgXml
          xml={image_icon}
          width={width}
          height={height}
          style={style}
        />
        )
}