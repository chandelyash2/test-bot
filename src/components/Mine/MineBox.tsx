import { twMerge } from "tailwind-merge";

interface MineBoxProp {
  color: string;
  value: number;
  price: number;
  ranking: string;
  locked: boolean;
}

export const MineBox = ({
  color,
  value,
  price,
  ranking,
  locked,
}: MineBoxProp) => {
  return (
    <div
      className={twMerge(
        "relative min-w-[154px] border border-[#5C666C] rounded flex flex-col gap-1 justify-center items-center p-3 ",
        locked ? "bg[#2E3A41]/50 z-1" : " bg-[#2E3A41]"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="28"
        viewBox="0 0 42 28"
        fill="none"
      >
        <g clip-path="url(#clip0_4601_266)">
          <path
            d="M30.4199 11.9041C32.2783 15.0748 33.5227 18.1469 33.9657 20.4051C34.052 20.8451 34.6603 20.9258 34.8485 20.5189C35.8728 18.3045 35.6434 14.9801 34.1331 11.6926L35.8082 10.6831C36.5864 10.2087 36.8427 9.20416 36.3779 8.41113C35.917 7.62489 34.9153 7.35777 34.1212 7.80492L32.4225 8.77306C30.2949 5.85143 27.5059 4.0216 25.0723 3.83343C24.6256 3.79892 24.3984 4.36837 24.7395 4.65895C26.4912 6.15141 28.566 8.74133 30.4199 11.9041Z"
            fill="white"
          />
          <path
            d="M29.0508 12.7079C29.3553 13.2275 29.6382 13.7414 29.9102 14.2525L7.8577 27.5917C6.84707 28.2025 5.5321 27.871 4.93101 26.8455C4.33795 25.8336 4.68149 24.5392 5.68647 23.9502L5.71384 23.9341L28.127 11.2102C28.4401 11.6973 28.7502 12.1952 29.0508 12.7079Z"
            fill="#A5A5A5"
          />
        </g>
        <defs>
          <clipPath id="clip0_4601_266">
            <rect width="42" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 className="font-istok">
        Miner <span className={color}>Pro</span>
      </h2>
      <span className="font-bold text-3xl font-istok ">{value}X</span>
      <p className="text-xs text-[#C0C4C6]">Income per hour +100</p>
      <span className="font-roboto font-bold flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clip-path="url(#clip0_4601_276)">
            <path
              d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
              fill="#F0D64D"
            />
            <path
              opacity="0.2"
              d="M9.77896 0.574219L0.379822 9.27937C0.580822 9.86314 0.858514 10.4176 1.2056 10.9282L11.3594 1.52195C10.8767 1.13775 10.3453 0.819074 9.77896 0.574219ZM11.8347 1.93812L1.58295 11.4332C1.73115 11.6143 1.88792 11.7874 2.05326 11.9528L12.3165 2.44672C12.1645 2.26916 12.0037 2.09932 11.8347 1.93785V1.93812ZM12.8106 3.09531L2.66275 12.4945C3.11603 12.8528 3.612 13.1536 4.13931 13.39L13.5899 4.63559C13.3949 4.09186 13.1331 3.57448 12.8106 3.09531Z"
              fill="white"
            />
            <path
              d="M11.1423 11.1438C13.4308 8.85525 13.4308 5.14475 11.1423 2.85618C8.85371 0.56761 5.1432 0.567611 2.85464 2.85618C0.566067 5.14475 0.566067 8.85525 2.85464 11.1438C5.1432 13.4324 8.85371 13.4324 11.1423 11.1438Z"
              fill="#FFFA89"
            />
            <path
              d="M10.9596 10.9611C13.1472 8.77346 13.1472 5.22654 10.9596 3.03887C8.7719 0.851194 5.22498 0.851194 3.0373 3.03887C0.849631 5.22654 0.849631 8.77346 3.0373 10.9611C5.22498 13.1488 8.7719 13.1488 10.9596 10.9611Z"
              fill="#DFBF4F"
            />
            <path
              opacity="0.18"
              d="M8.62941 1.63867L1.53125 8.21375C1.66836 8.83359 1.91037 9.42544 2.24684 9.96375L10.3193 2.4866C9.80829 2.10993 9.23681 1.82318 8.62941 1.63867ZM10.8065 2.8902L2.61133 10.4808C2.75661 10.664 2.91314 10.838 3.08 11.0017L11.29 3.39742C11.1395 3.21844 10.9781 3.04903 10.8065 2.8902ZM11.7693 4.05969L3.70289 11.5297C4.1826 11.8793 4.71502 12.1502 5.28008 12.332L12.4482 5.69348C12.3105 5.11617 12.0813 4.56461 11.7693 4.05969Z"
              fill="#C8C8C8"
            />
            <path
              d="M11.5937 2.40624C10.3677 1.22554 8.72735 0.573059 7.02532 0.589083C5.32329 0.605107 3.6955 1.28835 2.49193 2.49193C1.28835 3.6955 0.605107 5.32329 0.589083 7.02532C0.573059 8.72735 1.22554 10.3677 2.40624 11.5937C3.63226 12.7744 5.27262 13.4269 6.97465 13.4109C8.67668 13.3949 10.3045 12.7116 11.508 11.508C12.7116 10.3045 13.3949 8.67668 13.4109 6.97465C13.4269 5.27262 12.7744 3.63226 11.5937 2.40624ZM6.99999 13.4154C3.46252 13.4154 0.584595 10.5374 0.584595 6.99999C0.584595 3.46252 3.46252 0.584595 6.99999 0.584595C10.5374 0.584595 13.4154 3.46252 13.4154 6.99999C13.4154 10.5374 10.5374 13.4154 6.99999 13.4154Z"
              fill="#F2C341"
            />
            <path
              d="M6.48047 10.3586V9.74968C6.41685 9.73765 6.35432 9.72334 6.29289 9.70675C6.07441 9.64757 5.86556 9.55732 5.67273 9.43878C5.4756 9.31579 5.29543 9.16751 5.1368 8.99773L5.00391 8.85745L5.77117 7.92776L5.93988 8.13175C6.07119 8.29645 6.23573 8.43164 6.42277 8.52851C6.59831 8.61472 6.79159 8.65864 6.98715 8.65675C7.26359 8.65675 7.46566 8.6078 7.58734 8.51128C7.69535 8.42597 7.74785 8.29062 7.74785 8.09757V8.09374C7.74785 7.97917 7.72434 7.89222 7.6784 7.83534C7.6219 7.76675 7.54821 7.71438 7.46484 7.68358C7.32159 7.63144 7.17399 7.5921 7.02379 7.56601H7.01859C7.00391 7.56456 6.98937 7.56191 6.97512 7.55808L6.95078 7.55343L6.91195 7.54605C6.64387 7.5 6.38009 7.43168 6.12336 7.34179C5.89094 7.25511 5.69133 7.09788 5.52945 6.87421C5.36758 6.65054 5.28336 6.33472 5.28336 5.94206V5.93851C5.28336 5.56472 5.35445 5.24589 5.49445 4.99105C5.64018 4.72613 5.8688 4.51634 6.14523 4.39386C6.25344 4.34483 6.36605 4.3062 6.48156 4.27847V3.64136H7.62754V4.24839L7.68223 4.25905C7.85866 4.29692 8.03074 4.35281 8.19574 4.42585C8.36838 4.50255 8.53406 4.59404 8.69094 4.69929L8.88043 4.82562L8.19492 5.76788L8.01992 5.64948C7.88012 5.55276 7.72849 5.47438 7.56875 5.41624C7.43616 5.36902 7.2966 5.34434 7.15586 5.34323C6.90402 5.34323 6.71836 5.38999 6.60898 5.48241C6.50809 5.56444 6.45914 5.69624 6.45914 5.88163V5.88519C6.45914 6.00249 6.48484 6.09081 6.53543 6.14741C6.60061 6.21946 6.68345 6.27328 6.77578 6.30355C6.94711 6.35965 7.12148 6.40602 7.29805 6.44245L7.33086 6.45065L7.35219 6.4553L7.38992 6.46323L7.41727 6.46925H7.42246C7.67446 6.52097 7.92002 6.6002 8.15473 6.7055C8.3823 6.81565 8.57351 6.98874 8.7057 7.20425C8.8509 7.4312 8.92445 7.73499 8.92445 8.10659V8.11343C8.92445 8.47792 8.85008 8.78937 8.70324 9.03901C8.5523 9.29577 8.32563 9.48964 8.02895 9.61569C7.90001 9.66936 7.76598 9.70985 7.62891 9.73655V10.3573L6.48047 10.3586Z"
              fill="#FFFA89"
            />
            <path
              d="M6.35058 9.49565C6.1523 9.44208 5.96277 9.36021 5.78784 9.25257C5.60666 9.13996 5.44116 9.00388 5.29565 8.84788L5.77144 8.2712C5.92209 8.45966 6.11088 8.61416 6.32542 8.72456C6.53115 8.82593 6.7578 8.87762 6.98714 8.8755C7.31526 8.8755 7.56063 8.8117 7.72323 8.68409C7.88584 8.55649 7.96696 8.36144 7.96659 8.09894V8.09374C7.96659 7.92731 7.92722 7.79533 7.84847 7.6978C7.76763 7.59922 7.66216 7.52375 7.54276 7.47905C7.38714 7.42199 7.22672 7.37898 7.06343 7.35054C7.05726 7.3484 7.05081 7.3472 7.04429 7.34698C7.03778 7.34685 7.03133 7.34574 7.02515 7.3437L6.98878 7.33659L6.95214 7.32976C6.64224 7.27179 6.39104 7.20689 6.19854 7.13507C6.00604 7.06325 5.84198 6.933 5.70636 6.74433C5.56982 6.55565 5.50155 6.28769 5.50155 5.94042V5.93687C5.50155 5.5989 5.56289 5.31817 5.68558 5.09468C5.80875 4.87089 6.00219 4.69389 6.23601 4.59101C6.48046 4.47871 6.78671 4.42257 7.15476 4.42257C7.31649 4.42249 7.47779 4.43935 7.63601 4.47288C7.7977 4.50755 7.95539 4.55877 8.10659 4.62573C8.26763 4.69736 8.42215 4.78281 8.56843 4.88112L8.14105 5.46874C7.98553 5.36127 7.81679 5.27433 7.63901 5.21007C7.48342 5.15474 7.31962 5.12599 7.15448 5.12503C6.84878 5.12503 6.61955 5.1881 6.46679 5.31425C6.31403 5.44039 6.23765 5.6297 6.23765 5.88218V5.88573C6.23765 6.05946 6.28167 6.19545 6.36972 6.2937C6.45963 6.39355 6.57392 6.46835 6.7014 6.51081C6.8808 6.56963 7.06338 6.61829 7.24827 6.65655L7.27561 6.66366C7.28491 6.66585 7.2953 6.66831 7.30679 6.6705L7.33987 6.67761L7.37296 6.68444C7.60899 6.73248 7.83899 6.80648 8.05874 6.90511C8.24907 6.99757 8.4088 7.14279 8.51893 7.32347C8.6418 7.5156 8.70314 7.77728 8.70296 8.10851V8.11534C8.70296 8.44183 8.63916 8.71335 8.51155 8.92991C8.38395 9.14647 8.19345 9.30862 7.94007 9.41636C7.6865 9.52373 7.36877 9.5775 6.98687 9.57769C6.77207 9.5787 6.55809 9.55111 6.35058 9.49565ZM6.69921 3.86011H7.40796V4.65308H6.69921V3.86011ZM6.69921 9.30288H7.40796V10.1399H6.69921V9.30288Z"
              fill="#F0D64D"
            />
          </g>
          <defs>
            <clipPath id="clip0_4601_276">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {price}k
      </span>
      <hr className="w-32 h-1" />
      <h2 className="text-xs font-bold font-roboto">
        {ranking}{" "}
        {ranking !== "Unlocked" && (
          <span className="text-[10px] text-gray-300">Required</span>
        )}
      </h2>
      {!locked && (
        <div className="absolute inset-0 flex justify-center items-center  bg-black/50 z-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.3333 20.6663H43.9166C45.9721 20.6663 47.9433 21.4828 49.3967 22.9362C50.8501 24.3896 51.6666 26.3609 51.6666 28.4163V49.083C51.6666 51.1384 50.8501 53.1096 49.3967 54.563C47.9433 56.0165 45.9721 56.833 43.9166 56.833H18.0833C16.0279 56.833 14.0566 56.0165 12.6032 54.563C11.1498 53.1096 10.3333 51.1384 10.3333 49.083V28.4163C10.3333 26.3609 11.1498 24.3896 12.6032 22.9362C14.0566 21.4828 16.0279 20.6663 18.0833 20.6663H20.6666V15.7838C20.6666 13.0432 21.7553 10.4149 23.6932 8.47703C25.6311 6.53916 28.2594 5.45047 31 5.45047C33.7406 5.45047 36.3689 6.53916 38.3067 8.47703C40.2446 10.4149 41.3333 13.0432 41.3333 15.7838V20.6663ZM27.291 11.9915C26.3227 13.013 25.7986 14.3767 25.8333 15.7838V20.6663H36.1666V15.7838C36.2014 14.3767 35.6772 13.013 34.7089 11.9915C33.7406 10.9699 32.407 10.3735 31 10.333C29.593 10.3735 28.2594 10.9699 27.291 11.9915ZM27.4119 33.3801C28.474 32.6704 29.7226 32.2917 31 32.2917C32.7128 32.2917 34.3555 32.9721 35.5667 34.1833C36.7779 35.3944 37.4583 37.0371 37.4583 38.75C37.4583 40.0273 37.0795 41.276 36.3699 42.338C35.6602 43.4001 34.6516 44.2279 33.4715 44.7167C32.2914 45.2055 30.9928 45.3334 29.74 45.0842C28.4872 44.835 27.3365 44.2199 26.4333 43.3167C25.53 42.4135 24.9149 41.2627 24.6657 40.0099C24.4165 38.7572 24.5444 37.4586 25.0333 36.2785C25.5221 35.0984 26.3499 34.0897 27.4119 33.3801Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
