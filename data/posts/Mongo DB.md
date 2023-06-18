이걸 내가 다시 만질 날이 올 줄이야...

## 기본 세팅

npm i mongodb

```
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MOGO_DB_URI ?? "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,	//  MongoDB 서버 API 버전
    strict: true,			// 엄격 모드
    deprecationErrors: true,		// 오래된 버전이면 에러 뱉을 건지
  },
});
```

## 데이터 베이스에 접근
.db("").collection("")식으로 접근하면 안 된다.

```
export async function GET() {
  const mongo = await client.connect();
  const db = mongo.db("todos");
  const collection = db.collection("todo");
// ...
}
```

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/9b5131b4-8511-4eb9-90b8-53351e020c3f)

## API
https://www.mongodb.com/docs/drivers/node/current/quick-reference/

**하나 찾기**

```
await coll.findOne({ title: 'Hamlet' });

// { title: 'Hamlet', type: 'movie', ... }
```

**여러 개 찾기**

```
coll.find({ year: 2005 });

// [
//   { title: 'Christmas in Boston', year: 2005, ... },
//   { title: 'Chicken Little', year: 2005, ... },
//   ...
// ]

또는

coll.find({});

// 전부
```

**한 개 삽입**

```
await coll.insertOne({ title: 'Jackie Robinson' });
```

**한 개 수정**

```
await coll.updateOne(
  { title: 'Amadeus' },
  { $set: { 'imdb.rating': 9.5 } }
);

// { title: 'Amadeus', imdb: { rating: 9.5, ... } }
```

**한 개 삭제**

```
await coll.deleteOne({ title: 'Congo' });
```

**여러 개 삭제**

```
await coll.deleteMany({ title: { $regex: /^Shark.*/ } });
```

**검색**

```
// only searches fields with text indexes
coll.find({ $text: { $search: 'zissou' } });

// [
//   { title: 'The Life Aquatic with Steve Zissou', ... }
// ]
```
