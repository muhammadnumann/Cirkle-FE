import React from 'react';

const LanguageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" fill="url(#patternlandguageicon)" />
    <defs>
      <pattern
        id="patternlandguageicon"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#image0_404_5856" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_404_5856"
        width="48"
        height="48"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGOfPtRkwAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAF20lEQVRoBc1ab2xTVRQ/963b2rEaBmVSViaGhSwSJTKkgATtzJYYMcOYJUomfmJ88AsuZtEPJjMQQUPUBInIYmIC8sEvbMk+kGkcmshixowfhBCpTLau7ViX/WnXtV37rue87b28t7V9r13/7CbNfe+ec8/5nXf/nXtOGeSgtL4/ZpnwRZqAgYsDq2cc6oDxKs7Bev12Iz7yILZPoyo3Y3Af6QPbHPwnNuhZWKt6lq2A144/qpqDxRbgQL9mAF6RTNb1313JmtFWCKNR/Vj3VjLWu3F0lAzMuGRswOvt3orZuXAHZ7wTgVv1NKYyQN0PRyUIjH0u2Kq/2DY8HFbT9J4FPQaZ3vojL3npuLt9Nhh2c+BnjICX++rVNNW4yM8kJh+7PbW17by1tUSvj0w3NAKNJ8Zq4ovRHs75Prmj0drICKySxdgdi5kfs/3jGV9FW9GgOwJ3R2JOBD+UDfgVuoy/4odaiLChsR07nHqdTOkY+n6bbdtZW9q93W4yj3oX07GmpNlGxlLSdAh2XBu3ohxOlpvYtVS8KUeg6cTDtkN7K6/i/DQ3vqi7VlPJX1M76RYBrkbjvC2VoKQGuN4acR5ssHRbzEvkV4pkgAyaM+iOcZ50Oq0ygBZsgiVuNB6ymmUBT9pKYfcu5VVuLlhNI5EQ4Qauw5qVSjVrgLbKyM8PezZWl9r37dGeS6+6noCpmfjK/hAMijC/gAOd78LBHkkA7YQHGGMJWZ1mG40keDta+61M1KvH/TE4/YkHZtGIVCWrbTSVMGxnTDjlGB29IrMoUwgtq+AAXTJBr56ajsOH571pwevJyIaOh2iXt6FBmR6KAf23wx14utqNCA3NJ+Cjz7wwEVg9pYz0XxMP53Yx8LhDliEZQI7ZuW+8nYPDIbk9ZR1bFOHjCz74zxNLyZN3AuedM7W1VaRHMoC8ykQcrGcv+oHmdbpy+VoA7j6IpGPJOw3XqTXEeQspWppC5BJjEXERbKrSbEzUrCmOrWWa92K9IFQJs4kuI35fFP15gGfqzGApV5ZFUmyH92+Ayz8EktKSNa7BlUgmTmlDN6OZC2ARpJvU8mXk+WeVxS0xBnCnufnrHI4M2rtcqjeXQv3Ocvm1aDVCqogCNJnoGoi7j1T27rYogAYGg3Dx+0kIzeMReHMG3nt3CzxXv0Q/vL8S7v+L3YtdRHAJdIclHBssAtTjFKIt8tOv/XDu0oQEnmgjYzH44Ow4nL/kB9r/j6AB66JwqDfRBZwGYA9+/b/+XoALVyYgMK2c1BqcvwyGYPDPeWh7cxM8vb1MMkzDUOgXBnXsyNsPAjifNm/dYgL/ZO4Pply7EupvhH7QlEB7KjXmA7xaWT6eOWPW9HtmPrTmWKYghTRyLLRQ4ihgJgCXImaF0plTPRTtE/C65s6p1MIKczO8xHyJC/l0YfXmRhtO/68EdOcGciOuCFIQO64DbomKQGeB1hEqAp5MVOLXD6PfacNdiC2gL9SfSed1wYuYCbvk/Mfv3evlonhsXQAzCIIJQi+xSlEJup6FQHwkn8oGZRSNjc6uShCeopyCdBJLyQWMzxcNUaaKEaucEFFcCUouYNDFl6msgvMjRgnrsmLFAMqMMGBdBQeUoULCqM7iKAaQnBqn8zschTsZyiwcO2KTMKo0akKL1B44erQmLopDeMkxFORSycrrIwL1mQThBVtfnyZrs8oAQkGhbFGEW7grFS8krfocuOtEBAFeLmPsD1Wz9KiZQjKRGPGqeVJ+L3ZNWJKBJ1xJDSACpXWQ+A5ZT+/FKNKXRwzpUkxJp5AaLE0nSi4YDfyq+67pmYGvRIA3Un15WbauAcQY2OWowaxhD2SRZpUVZVTnMs1Kiilf63AewMyIcCqvhx0eUlICA3UZyRETNkMjQIxyoeSCFJ/HEHeufCfybfDDZPVXg4wNkA2RHEAMceN50cKAN2Od0X0CFRfnzx6yAeqaH3RYvB7WhPdrF44KhSrr0KgqitsQH0UP8vV3m/8B2y0q/yjzVHoAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default LanguageIcon;
