import Image from "next/image";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const mainColor = "#0080ff";

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
        디딤돌? 보금자리론?
        <br />
        나에게 맞는 대출이 궁금해요
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

const loanSteps = [
  {
    image: "/step1.png",
    alt: "집 알아보기",
    title: "1. 집을 알아봅니다",
    description: (
      <>
        내 자금과 대출을 고려해서
        <br />
        구입 가능한 주택을 찾아야 합니다.
      </>
    ),
  },
  {
    image: "/step2.png",
    alt: "계약 결정",
    title: "2. 계약을 결정해야 합니다",
    description: (
      <>
        수억원의 계약을 하기 전에
        <br />
        대출 가능 여부와 자금계획이 중요합니다.
      </>
    ),
  },
  {
    image: "/step3.png",
    alt: "대출 심사",
    title: "3. 정확한 심사는 그 이후",
    description: (
      <>
        실제 대출 가능 여부와 한도는
        <br />
        금융기관 등의 심사를 거쳐 결정됩니다.
      </>
    ),
  },
];

const consultingItems = [
  "정책대출 가능 여부 및 예상한도 검토",
  "개인·주택 조건에 따른 상품별 비교",
  "계약 전 주의사항 및 유의점 안내",
  "계약 전 자금계획 상담",
];

const faqItems = [
  {
    question: "상담을 받으면 대출 승인이 보장되나요?",
    answer: (
      <>
        <p>
          아니요. 내일내집의 상담은 대출 승인이나 한도를 보장하는 서비스가
          아닙니다.
        </p>

        <p>
          고객님이 제공한 정보와 상담 시점의 정책대출 기준을 바탕으로 계약 전에
          확인할 수 있는 조건을 검토해드립니다.
          <br className="hidden md:block" />
          실제 대출 승인 여부와 한도는 금융기관 등의 최종 심사를 통해
          결정됩니다.
        </p>
      </>
    ),
  },
  {
    question: "아직 집을 계약하지 않았는데 상담 받을 수 있나요?",
    answer: (
      <>
        <p>네. 오히려 내일내집은 계약 전 상담을 중요하게 생각합니다.</p>

        <p>
          현재 소득과 자산, 기존 대출 등의 개인 조건과 구입 예정인 주택의 가격,
          지역 등의 정보를 바탕으로
          <br className="hidden md:block" />
          검토 가능한 정책대출과 자금계획에 필요한 사항을 확인할 수 있습니다.
        </p>

        <p>
          아직 구체적인 주택을 정하지 않았다면 어느 정도 조건의 주택을 알아보면
          좋을지 판단하는 데 필요한 대출 기준도 안내받을 수 있습니다.
        </p>
      </>
    ),
  },
  {
    question: "상담 결과와 실제 은행 심사 결과가 다를 수도 있나요?",
    answer: (
      <>
        <p>
          네, 다를 수 있습니다.
          <br />
          내일내집의 상담은 고객님이 제공한 정보와 상담 당시 확인 가능한 기준을
          바탕으로 한 사전 검토 결과입니다.
        </p>

        <p>
          실제 대출 가능 여부와 한도는 신청 시점의 정책 및 금융기관의 심사
          결과에 따라 달라질 수 있습니다.
        </p>
      </>
    ),
  },
  {
    question: "어떤 정책대출을 상담 받을 수 있나요?",
    answer: (
      <>
        <p>
          현재는 주택 구입과 관련된 대표적인 정책대출을 중심으로 상담합니다.
        </p>

        <p>
          디딤돌대출, 신생아특례 디딤돌대출, 보금자리론 등을 고객님의 개인
          조건과 주택 조건에 맞춰 검토하고 있으며,
          <br className="hidden md:block" />
          버팀목전세대출과 같은 전세대출 상품은 준비 중에 있습니다.
        </p>
      </>
    ),
  },
  {
    question: "내일내집은 은행이나 금융기관인가요?",
    answer: (
      <>
        <p>
          아니요. 내일내집은 대출을 직접 실행하거나 승인하는 금융기관이
          아닙니다.
        </p>

        <p>
          복잡한 정책대출 기준을 고객님의 상황에 맞춰 검토하고, 계약 전에 필요한
          정보를 확인할 수 있도록 돕는 상담 서비스입니다.
        </p>

        <p>
          실제 대출 신청 및 심사는 해당 금융기관 및 관련 기관을 통해 진행됩니다.
        </p>
      </>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*                              COMMON COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <p
        className="text-sm font-semibold tracking-[0.18em]"
        style={{ color: mainColor }}
      >
        {eyebrow}
      </p>

      <h2 className="mt-4 text-[32px] font-semibold leading-[1.25] tracking-tight text-gray-950 md:text-[48px]">
        {title}
      </h2>

      {description && (
        <div className="mx-auto mt-5 max-w-[760px] text-[15px] leading-[1.75] text-gray-600 md:text-[17px]">
          {description}
        </div>
      )}
    </div>
  );
}

function StepArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <svg
        viewBox="0 0 40 60"
        className="h-14 w-10 fill-none stroke-blue-300"
        strokeWidth="4"
        aria-hidden="true"
      >
        <path d="M4 10 20 30 4 50" />
        <path d="M16 10 32 30 16 50" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* -------------------------------------------------------------------- */}
      {/* HEADER                                                               */}
      {/* -------------------------------------------------------------------- */}

      <header className="bg-white px-5">
        <div className="mx-auto flex h-[88px] max-w-[1180px] items-center">
          <Image
            src="/logo2.png"
            alt="내일내집 로고"
            width={150}
            height={50}
            priority
            className="h-auto object-contain"
          />
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* HERO                                                                 */}
      {/* -------------------------------------------------------------------- */}

      <section
        className="relative flex min-h-[520px] items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg2.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 py-20 md:px-8">
          <div>
            <span
              className="px-6 py-2 mb-2 rounded-full text-white text-[18px] leading-[1.75] md:text-[20px] font-bold"
              style={{ backgroundColor: mainColor }}
            >
              정책주택대출 전문 상담 서비스
            </span>
          </div>
          <h1 className="text-[38px] font-bold leading-[1.3] tracking-tight text-white md:text-[54px]">
            집은 계약하기 전에
            <br />
            <span style={{ color: mainColor }}>정책대출</span> 확인해야 하니까.
          </h1>

          <div className="mt-8 space-y-7 text-[16px] leading-[1.75] text-white/90 md:text-[17px]">
            <p>
              디딤돌 · 신생아특례 · 보금자리론
              <br />
              복잡한 정책대출을 내 조건에 맞춰 꼼꼼하게 검토합니다.
            </p>

            <p>
              은행에 가기엔 아직 계약 전이고,
              <br />
              인터넷 검색만 믿고 계약하기엔 불안하니까.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* LOAN CHECK                                                           */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-[#EAF5FF] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="LOAN CHECK"
            title={
              <>
                혹시 <span style={{ color: mainColor }}>이런 상황</span>
                이신가요?
              </>
            }
            description={
              <div>
                <p className="text-[18px] font-bold leading-[1.3] tracking-tight md:text-[28px]">
                  <span style={{ color: mainColor }} className="">
                    디딤돌 • 신생아특례 • 보금자리론
                  </span>
                  을
                </p>
                <p>준비하고 있다면 확인해보세요.</p>
              </div>
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checkItems.map((item) => (
              <article
                key={item.title}
                className="min-h-[190px] rounded-[28px] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={52}
                  height={52}
                  className="mb-6 object-contain"
                />

                <h3 className="text-[19px] font-semibold text-gray-950">
                  {item.title}
                </h3>

                <div className="mt-3 text-[15px] leading-[1.65] text-gray-600">
                  {item.description}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[20px] font-semibold leading-[1.7] text-gray-950 md:text-[24px]">
              하나라도 해당된다면,
              <br />
              <span style={{ color: mainColor }}>집 계약 전</span> 꼭
              확인해보세요.
            </p>
            <p>
              '내일내집'은 디딤돌•신생아특례•보금자리론 등 정책주택대출만 상담합니다.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* WHY                                                                  */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="WHY 내일내집"
            title={
              <>
                집은 계약하기 전에
                <br />
                <span style={{ color: mainColor }}>대출을 알아야</span> 합니다.
              </>
            }
            description={
              <p>
                실제 대출 가능 여부와 한도는 금융기관 등의 심사를 통해 결정되기
                때문에
                <br className="hidden md:block" />
                계약 전 확인할 수 있는 조건을 미리 검토하는 것이 중요합니다.
              </p>
            }
          />

          {/* STEP */}

          <div className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1fr_42px_1fr_42px_1fr]">
            {loanSteps.map((step, index) => (
              <div key={step.title} className="contents">
                <article className="flex min-h-[310px] flex-col items-center justify-center rounded-[28px] bg-blue-50 px-7 py-10 text-center">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-8 text-[19px] font-semibold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.7] text-gray-600">
                    {step.description}
                  </p>
                </article>

                {index < loanSteps.length - 1 && <StepArrow />}
              </div>
            ))}
          </div>

          {/* CONSULTING STANDARD */}

          <div className="mt-8 rounded-[28px] bg-blue-100 px-7 py-10 md:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
                <Image
                  src="/step2.png"
                  alt=""
                  width={120}
                  height={120}
                  className="shrink-0 object-contain"
                />

                <div>
                  <h3 className="text-[21px] font-semibold leading-[1.55] text-gray-950 md:text-[24px]">
                    그래서 <strong className="font-bold">'내일내집'</strong>은
                    <br />
                    <span style={{ color: mainColor }}>
                      계약 전에 확인할 수 있는 것부터
                    </span>{" "}
                    확인합니다.
                  </h3>

                  <p className="mt-6 text-[14px] leading-[1.75] text-gray-600 md:text-[15px]">
                    고객의 조건과 구입 예정 주택, 관련 정책대출 기준을 검토해
                    <br className="hidden md:block" />
                    계약 전 자금계획을 세우는 데 필요한 정보를 안내합니다.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {consultingItems.map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-[15px] text-gray-800 md:text-[16px]"
                  >
                    <Image
                      src="/check.png"
                      alt=""
                      width={28}
                      height={28}
                      className="shrink-0"
                    />

                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-[13px] leading-[1.7] text-gray-400 md:text-[14px]">
            * 내일내집은 대출 승인 여부를 보장하지 않으며,
            <br />
            계약 전 참고할 수 있는 정보를 제공하는 서비스입니다.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* OUR STANDARD                                                         */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-[#EAF5FF] px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="OUR STANDARD"
            title={
              <>
                경험은 사람에게 있지만,
                <br />
                기준은 <span style={{ color: mainColor }}>내일내집</span>에
                남습니다.
              </>
            }
            description={
              <p>현장의 경험을 내일내집의 상담 기준으로 만들었습니다.</p>
            }
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-[1.7fr_1fr]">
            {/* LEFT */}

            <div className="min-h-[500px] overflow-hidden rounded-[28px] bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat">
              <div className="flex min-h-[500px] justify-end">
                <div className="w-full bg-white/75 px-8 py-10 backdrop-blur-[2px] sm:w-[58%] md:px-10 lg:w-1/2">
                  <h3 className="text-[28px] font-semibold leading-[1.3] tracking-tight text-gray-950 md:text-[40px]">
                    대출과 부동산,
                    <br />
                    <span style={{ color: mainColor }}>두 가지 관점</span>에서
                    <br />
                    확인합니다.
                  </h3>

                  <div className="mt-12 space-y-7">
                    <div>
                      <p
                        className="text-sm font-semibold tracking-[0.12em]"
                        style={{ color: mainColor }}
                      >
                        01
                      </p>
                      <h4 className="mt-2 text-[22px] font-semibold text-gray-950">
                        대출 실무 경험
                      </h4>
                    </div>

                    <div>
                      <p
                        className="text-sm font-semibold tracking-[0.12em]"
                        style={{ color: mainColor }}
                      >
                        02
                      </p>
                      <h4 className="mt-2 text-[22px] font-semibold text-gray-950">
                        부동산 거래 이해
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex min-h-[500px] flex-col justify-center rounded-[28px] bg-white px-8 py-10 md:px-10">
              <h3 className="text-[22px] font-semibold leading-[1.6] text-gray-950 md:text-[24px]">
                약 15년의 현장 경험에서
                <br />
                내일내집의 기준이 시작됐습니다.
              </h3>

              <div className="mt-9 space-y-2 text-[15px] leading-[1.8] text-gray-600 md:text-[16px]">
                <p>개인 대출상담사부터</p>
                <p>온라인 대출모집법인 수석,</p>
                <p>오프라인 대출모집법인 이사·대표,</p>
                <p>공인중개사사무소 대표까지.</p>
              </div>

              <p className="mt-9 text-[15px] leading-[1.9] text-gray-600 md:text-[16px]">
                부동산과 대출 현장에서 경험을 쌓아온
                <br />
                동료들과 함께 현장의 노하우를
                <br />
                <span className="font-semibold" style={{ color: mainColor }}>
                  내일내집의 상담 기준
                </span>
                에 담았습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* FAQ                                                                  */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading
            eyebrow="FAQ"
            title="자주 묻는 질문"
            description={
              <p>내일내집 상담 전 많이 궁금해하시는 내용을 정리했습니다.</p>
            }
          />

          <div className="mt-14 border-t border-gray-200">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="border-b border-gray-200 py-9"
              >
                <h3 className="text-[17px] font-semibold leading-[1.5] text-gray-950 md:text-[18px]">
                  <span className="mr-2" style={{ color: mainColor }}>
                    Q.
                  </span>
                  {item.question}
                </h3>

                <div className="mt-5 space-y-4 text-[14px] leading-[1.85] text-gray-600 md:text-[15px]">
                  {item.answer}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-100 px-5 ">
        <div className="mx-auto flex h-[88px] max-w-[1180px] items-center justify-center">
          <Image
            src="/logo2.png"
            alt="내일내집 로고"
            width={150}
            height={50}
            priority
            className="h-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
