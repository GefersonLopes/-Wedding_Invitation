import { useContext } from "react";
import { Context } from "../context/Context";

export const CountTime = () => {
    const { time, setTime } = useContext(Context);
    setTimeout(() => setTime(time + 1), 1000);
    return time;
};

export const filterButtons = (category: string) => {
  return ListGifts.filter(gifts => gifts.category === category);
};

export const ListGifts = [
    {
        product: " Jarra de vidro",
        price: 30.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dfTt2JlB3ou6qtTnepo07EI7iuBQFe21xQ&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Conjunto jantar",
        price: 450.0,
        image: "https://madesacms.vteximg.com.br/arquivos/ids/228899-1000-1000/01-MDJA0600787GSIM-ambientado.jpg",
        category: "móveis",
    },
    {
        product: "Mesa de centro",
        price: 150.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oa69xaPl2wjujJwVTNdznn-8EyPzEbmvxudVP1sekqwsOjYK&usqp=CAc",
        category: "móveis",
    },
    {
        product: "Cômoda",
        price: 250.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KJyVViTZobqlNBml2zBBMEfxBmxqJTbjcQ&usqp=CAU",
        category: "móveis",
    },
    {
        product: "Escorredor",
        price: 85.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1bHkARKXosjvY83ky-oOf2oq2Dnay9-G8w&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "P Condimentos",
        price: 75.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdgoWF0609Fh6IR7AcH-2UzI4OL9KRn34vQ&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Mini sapateira",
        price: 199.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ivhIqopEmF1w0qJtxbcWNuOUsUNSRWAm2Q&usqp=CAU",
        category: "móveis",
    },
    {
        product: "Kit colher de pau",
        price: 35.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2koU9OAKCkp9YlPzkmqNIrVUSFD9t8yO3w&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Kit pano de prato",
        price: 38.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWWWwR_M0QJj3XZWI7fk8Ras3AxUJPiOOaw&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Fruteira simples",
        price: 139.89,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8VX0I3kXoCZNhiTe2wUOtV8_0OLrnbfK1Q&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Jogo americano",
        price: 58.39,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEDf5DyMp8PSPxMQSP1v5-ePC2NXcs9A1Kw&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Kit  cabides",
        price: 55.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRcJvOzcMnLI8Q3CIyP94tvze9AU2Rx_gPA&usqp=CAU",
        category: "utensílios",
    },
    {
        product: "Jogo de panelas",
        price: 299.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFd4v8AcECd8C7jK4kXKkU6qpSaPS7R_c-A&usqp=CAU",
        category: "utensílios",
    },
];
