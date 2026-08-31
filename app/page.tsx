import Image from "next/image";

const checkItems = [
  {
    image: "/image1.png",
    title: "계약 전 대출한도",
    description: (
      <>
        대출이 얼마나 가능한지
        <br />
        모르겠어요
      </>
    ),
  },

  {
    image: "/image2.png",
    title: "어떤 대출이 맞을까요?",
    description: (
      <>
        어떤 상품을 검토해야 할지
        <br />
        모르겠어요
      </>
    ),
  },

  {
    image: "/image3.png",

    title: "은행마다 다른 답변",

    description: (
      <>
        어떤 내용이 맞는지
        <br />
        모르겠어요
      </>
    ),
  },

  {
    image: "/image4.png",
    title: "대출한도 부족",

    description: (
      <>
        다른 방법이 있는지
        <br />
        궁금해요
      </>
    ),
  },

  {
    image: "/image5.png",
    title: "복잡한 소득 산정",

    description: (
      <>
        휴직, 이직, 프리랜서 등
        <br />내 소득이 어떻게 적용될지 궁금해요
      </>
    ),
  },

  {
    image: "/image6.png",

    title: "은행에서 안된다고 하는데",

    description: (
      <>
        정말 방법이 없는지
        <br />
        다시 검토하고 싶어요
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="w-full">
      <section className="h-0">로고</section>
      {/* HERO */}
      <section
        className="relative flex min-h-[460px] items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg2.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-20 md:px-10">
          <h1 className="text-[38px] font-bold leading-[1.3] tracking-tight text-white md:text-[52px]">
            집은 계약하기 전에
            <br />
            <span className="text-blue-500">대출부터</span> 확인해야 하니까.
          </h1>

          <p className="mt-8 text-[16px] leading-[1.6] text-white/90 md:text-[17px]">
            디딤돌 · 신생아특례 · 보금자리론
            <br />
            복잡한 정책대출을 내 조건에 맞춰 꼼꼼하게 검토합니다.
          </p>

          <p className="mt-9 text-[16px] leading-[1.6] text-white/90 md:text-[17px]">
            은행에 가기엔 아직 계약 전이고,
            <br />
            인터넷 검색만 믿고 계약하기엔 불안하니까.
          </p>
        </div>
      </section>

      {/* LOAN CHECK */}

      <section className="bg-[#eaf5ff] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          {/* Heading */}

          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-600">
              LOAN CHECK
            </p>

            <h2 className="mt-3 text-[32px] font-semibold tracking-tight text-black md:text-[46px]">
              혹시 <span className="text-blue-500">이런 상황</span>이신가요?
            </h2>

            <p className="mt-4 text-[15px] leading-[1.6] text-gray-700 md:text-[17px]">
              집을 알아보는 순간부터 대출 실행까지,
              <br />내 조건에 따라 확인해야 할 내용은 달라집니다.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checkItems.map((item) => (
              <div
                key={item.title}
                className="min-h-[168px] rounded-[30px] bg-white px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* <div className="mb-4 text-3xl">{item.icon}</div> */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="mb-5 object-contain"
                />

                <h3 className="text-[19px] font-semibold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-3 text-[15px] leading-[1.55] text-gray-700">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom message */}

          <div className="mt-14 text-center">
            <p className="text-[20px] font-semibold leading-[1.8] text-gray-900 md:text-[24px]">
              하나라도 해당된다면,
              <br />
              계약 전에 <span className="text-blue-500">내 조건부터</span>{" "}
              확인해보세요
            </p>
          </div>
        </div>
      </section>
      {/* WHY SECTION */}
      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          {/* 제목 */}
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-600">
              WHY 몇프로
            </p>

            <h2 className="mt-4 text-[34px] font-semibold leading-[1.3] tracking-tight text-gray-950 md:text-[48px]">
              집은 계약하기 전에
              <br />
              <span className="text-blue-500">대출을 알아야</span> 합니다.
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.7] text-gray-700 md:text-[17px]">
              실제 대출 가능 여부와 한도는 금융기관 등의 심사를 통해 결정되기
              때문에
              <br className="hidden md:block" />
              계약 전 확인할 수 있는 조건을 미리 검토하는 것이 중요합니다
            </p>
          </div>

          {/* 3 STEP */}
          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1fr_42px_1fr_42px_1fr]">
            {/* STEP 1 */}
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[30px] bg-blue-50 px-8 py-10 text-center">
              {/* Icon */}
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-blue-100">
                <Image
                  src="/step1.png"
                  alt="집 알아보기"
                  width={120}
                  height={120}
                />
              </div>

              <h3 className="mt-8 text-[19px] font-semibold text-gray-900">
                1. 집을 알아봅니다
              </h3>

              <p className="mt-7 text-[15px] leading-[1.65] text-gray-700">
                내 자금과 대출을 고려해서
                <br />
                구입 가능한 주택을 찾아야 합니다.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden items-center justify-center lg:flex">
              <svg
                viewBox="0 0 40 60"
                className="h-14 w-10 fill-none stroke-blue-300"
                strokeWidth="4"
              >
                <path d="M4 10 20 30 4 50" />
                <path d="M16 10 32 30 16 50" />
              </svg>
            </div>

            {/* STEP 2 */}
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[30px] bg-blue-50 px-8 py-10 text-center">
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-blue-100">
                <Image
                  src="/step2.png"
                  alt="계약 결정"
                  width={120}
                  height={120}
                />
              </div>

              <h3 className="mt-8 text-[19px] font-semibold text-gray-900">
                2. 계약을 결정해야 합니다
              </h3>

              <p className="mt-7 text-[15px] leading-[1.65] text-gray-700">
                수억원의 계약을 하기 전에
                <br />
                대출 가능여부와 자금계획이 중요합니다
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden items-center justify-center lg:flex">
              <svg
                viewBox="0 0 40 60"
                className="h-14 w-10 fill-none stroke-blue-300"
                strokeWidth="4"
              >
                <path d="M4 10 20 30 4 50" />
                <path d="M16 10 32 30 16 50" />
              </svg>
            </div>

            {/* STEP 3 */}
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[30px] bg-blue-50 px-8 py-10 text-center">
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-blue-100">
                <Image src="/step3.png" alt="심사" width={120} height={120} />
              </div>

              <h3 className="mt-8 text-[19px] font-semibold text-gray-900">
                3. 하지만 정확한 심사는 그 이후
              </h3>

              <p className="mt-7 text-[15px] leading-[1.65] text-gray-700">
                실제 대출 가능 여부와 한도는
                <br />
                금융기관 등의 심사를 거쳐 결정됩니다
              </p>
            </div>
          </div>

          {/* 몇프로 설명 박스 */}
          <div className="mt-8 rounded-[30px] bg-blue-100 px-7 py-10 md:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              {/* 왼쪽 */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* 체크 아이콘 */}
                <Image
                  src="/step2.png"
                  alt="계약 전"
                  width={120}
                  height={120}
                />

                {/* 설명 */}
                <div>
                  <h3 className="text-[21px] font-semibold leading-[1.6] text-gray-950 md:text-[23px]">
                    그래서 <span className="font-bold">'몇프로'</span>는
                    <br />
                    <span className="text-blue-600">
                      계약 전에 확인할 수 있는 것부터
                    </span>{" "}
                    확인합니다
                  </h3>

                  <p className="mt-7 text-[14px] leading-[1.65] text-gray-700 md:text-[15px]">
                    고객의 조건과 구입 예정 주택, 관련 정책대출 기준을 검토해
                    <br className="hidden md:block" />
                    계약 전 자금계획을 세우는데 필요한 정보를 안내합니다
                  </p>
                </div>
              </div>

              {/* 오른쪽 체크리스트 */}
              <div className="space-y-5 text-[15px] text-gray-800 md:text-[16px]">
                {[
                  "정책대출 가능 여부 및 예상한도 검토",
                  "개인, 주택 조건에 따른 상품별 비교",
                  "계약 전 주의사항 및 유의점 안내",
                  "계약 전 자금 계획 상담",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    {/* <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-700 text-[12px]">
                      ✓
                    </div> */}
                    <Image
                      src="/check.png"
                      alt="계약 전"
                      width={30}
                      height={30}
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 하단 고지 */}
          <p className="mt-10 text-center text-[13px] leading-[1.7] text-gray-400 md:text-[14px]">
            * 몇프로는 대출 승인 여부를 보장하지 않으며,
            <br />
            계약 전 참고할 수 있는 정보를 제공하는 서비스입니다.
          </p>
        </div>
      </section>
      <section className="bg-[#EAF5FF] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          {/* 제목 영역 */}

          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-600">
              OUR STANDARD
            </p>

            <h2 className="mt-4 text-[34px] font-semibold leading-[1.25] tracking-tight text-gray-950 md:text-[48px]">
              경험은 사람에게 있지만,
              <br />
              기준은 <span className="text-blue-600">몇프로</span>에 남습니다.
            </h2>

            <p className="mt-5 text-[15px] text-gray-700 md:text-[16px]">
              현장의 경험을 몇프로의 상담 기준으로 만들었습니다.
            </p>
          </div>

          {/* 메인 콘텐츠 */}

          <div className="mt-14 grid gap-7 lg:grid-cols-[1.8fr_0.9fr]">
            {/* 왼쪽 이미지 영역 */}

            <div className="min-h-[500px] overflow-hidden rounded-[28px] bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat">
              <div className="flex h-full min-h-[500px] justify-end">
                <div className="w-1/2 py-6 px-10 bg-white/70">
                  <div className="mt-4 text-[32px] font-semibold leading-[1.25] tracking-tight text-gray-950 md:text-[44px]">
                    <p>대출과 부동산,</p>

                    <p>
                      <span className="text-blue-600">두가지 관점</span>
                      에서
                    </p>

                    <p>확인합니다.</p>
                  </div>

                  <div className="mt-10">
                    <div>
                      <h3 className="mb-4 text-[24px] font-semibold text-gray-900">
                        대출 실무 경험
                      </h3>
                    </div>

                    <div>
                      <h3 className="text-[24px] font-semibold text-gray-900">
                        부동산 거래 이해
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 설명 영역 */}

            <div className="flex min-h-[500px] flex-col justify-center rounded-[28px] bg-white px-8 py-10 md:px-10">
              <h3 className="text-[22px] font-semibold leading-[1.7] text-gray-950 md:text-[24px]">
                약 15년의 현장 경험에서
                <br />
                몇프로의 기준이 시작됐습니다
              </h3>

              <div className="mt-10 space-y-3 text-[15px] leading-[1.8] text-gray-700 md:text-[16px]">
                <p>개인 대출상담사부터</p>

                <p>온라인 대출모집법인 수석,</p>

                <p>오프라인 대출모집법인 이사·대표,</p>

                <p>공인중개사사무소 대표까지.</p>
              </div>

              <div className="mt-10 text-[15px] leading-[1.9] text-gray-700 md:text-[16px]">
                <p>
                  부동산, 대출 현장에서 경험을 쌓아온
                  <br />
                  동료들과 함께 현장의 노하우를
                  <br />
                  <span className="font-semibold text-blue-600">
                    몇프로의 상담 기준
                  </span>
                  에 담았습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[920px]">
          {/* 제목 */}

          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-[36px] font-semibold tracking-tight text-gray-950 md:text-[48px]">
              자주 묻는 질문
            </h2>

            <p className="mt-4 text-[15px] text-gray-500 md:text-[16px]">
              몇프로 상담 전 많이 궁금해하시는 내용을 정리했습니다.
            </p>
          </div>

          {/* FAQ 목록 */}

          <div className="mt-14">
            {/* FAQ 01 */}

            <div className="border-b border-gray-300 py-9">
              <h3 className="text-[17px] font-semibold text-gray-950 md:text-[18px]">
                Q. 상담을 받으면 대출 승인이 보장되나요?
              </h3>

              <div className="mt-5 space-y-2 text-[14px] leading-[1.8] text-gray-600 md:text-[15px]">
                <p>
                  아니요. 몇프로의 상담은 대출승인이나 한도를 보장하는 서비스가
                  아닙니다.
                </p>

                <p>
                  고객님이 제공한 정보와 상담 시점의 정책대출 기준을 바탕으로
                  계약 전에 확인할 수 있는 조건을 검토해드리며,
                  <br className="hidden md:block" />
                  실제 대출 승인 여부와 한도는 금융기관 등의 최종 심사를 통해
                  결정됩니다.
                </p>
              </div>
            </div>

            {/* FAQ 02 */}

            <div className="border-b border-gray-300 py-9">
              <h3 className="text-[17px] font-semibold text-gray-950 md:text-[18px]">
                Q. 아직 집을 계약하지 않았는데 상담 받을 수 있나요?
              </h3>

              <div className="mt-5 space-y-5 text-[14px] leading-[1.8] text-gray-600 md:text-[15px]">
                <p>네. 오히려 몇프로는 계약 전 상담을 중요하게 생각합니다.</p>

                <p>
                  현재 소득과 자산, 기존대출 등의 개인 조건과 구입 예정인 주택의
                  가격, 지역 등의 정보를 바탕으로
                  <br className="hidden md:block" />
                  검토 가능한 정책대출과 자금계획에 필요한 사항을 확인해 볼 수
                  있습니다.
                </p>

                <p>
                  아직 구체적인 주택을 정하지 않았다면 어느정도 조건의 주택을
                  알아보면 좋을지 판단하는데 필요한 대출기준을
                  <br className="hidden md:block" />
                  안내 받을 수 있습니다.
                </p>
              </div>
            </div>

            {/* FAQ 03 */}

            <div className="border-b border-gray-300 py-9">
              <h3 className="text-[17px] font-semibold text-gray-950 md:text-[18px]">
                Q. 상담 결과와 실제 은행 심사 결과가 다를 수도 있나요?
              </h3>

              <div className="mt-5 space-y-5 text-[14px] leading-[1.8] text-gray-600 md:text-[15px]">
                <p>
                  네, 다를 수 있습니다.
                  <br />
                  몇프로의 상담은 고객님이 제공한 정보와 상담 당시 확인 가능한
                  기준을 바탕으로 한 사전 검토 결과입니다.
                </p>

                <p>
                  실제 대출 가능 여부와 한도는 신청 시점의 정책 및 금융기관의
                  심사 결과에 따라 달라질 수 있습니다.
                </p>
              </div>
            </div>

            {/* FAQ 04 */}

            <div className="border-b border-gray-300 py-9">
              <h3 className="text-[17px] font-semibold text-gray-950 md:text-[18px]">
                Q. 어떤 정책대출을 상담 받을 수 있나요?
              </h3>

              <div className="mt-5 text-[14px] leading-[1.8] text-gray-600 md:text-[15px]">
                <p>
                  현재는 주택 구입과 관련된 대표적인 정책대출을 중심으로
                  상담합니다.
                </p>

                <p className="mt-2">
                  디딤돌대출, 신생아특례 디딤돌대출, 보금자리론 등을 고객님의
                  개인 조건과 주택 조건에 맞춰 검토하고 있으며,
                  <br className="hidden md:block" />
                  버팀목전세대출과 같은 전세대출 상품은 준비중에 있습니다.
                </p>
              </div>
            </div>

            {/* FAQ 05 */}

            <div className="py-9">
              <h3 className="text-[17px] font-semibold text-gray-950 md:text-[18px]">
                Q. 몇프로는 은행이나 금융기관인가요?
              </h3>

              <div className="mt-5 space-y-5 text-[14px] leading-[1.8] text-gray-600 md:text-[15px]">
                <p>
                  아니요. 몇프로는 대출을 직접 실행하거나 승인하는 금융기관이
                  아닙니다.
                </p>

                <p>
                  복잡한 정책대출 기준을 고객님의 상황에 맞춰 검토하고, 계약
                  전에 필요한 정보를 확인할 수 있도록 돕는 상담 서비스입니다.
                </p>

                <p>
                  실제 대출 신청 및 심사는 해당 금융기관 및 관련 기관을 통해
                  진행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
