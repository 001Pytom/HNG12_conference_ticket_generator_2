
const Image = ({ src, alt, className, ...props }) => {
    return (
      <div>
        <img
          src={src}
          alt={alt}
          className={`max-w-full transition-opacity duration-300 opacity-100 ${className}`}
          {...props}
        />
      </div>
    ); };
  
export default Image;
  