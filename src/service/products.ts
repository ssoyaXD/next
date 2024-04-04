import path from "path";
import {promises as fs} from 'fs';

// 받아올 데이터(Product 배열)의 타입에 대한 명시
export type Product = {
    id: string;
    name: string;
    price: number;
}
// fs는 promise니까 비동기를 의미하는 async(아마 또는 sync)를 함수 앞에 붙여주어야함
// 또한, 반환할 데이터에 대한 명시를 해주어야함 => Promise로 데이터를 받아오 되, return하는 데이터의 타입은 Product 배열임을 명시
export async function getProducts(): Promise<Product[]> {
    // 파일에서 데이터를 받아오기 위해 경로를 선언함
    // 이때, node에서 제공하는 process.cwd 함수를 이용하여 현재 디렉터리 주소를 받아오고, 만들어둔 data 폴더와 파일 이름을 join 함수로 연결함
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    // promise로 데이터를 받아온 후에 data에 대입하도록 하기 위해 await를 붙여주여야함
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

// 
export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    // 해당 함수로 받아온 id와 promise로 받아온 products 배열의 item 중 id가 동일한 것을 찾아서 반환
    return products.find(item => item.id === id);
}