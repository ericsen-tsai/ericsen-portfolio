import type { changelogEntry } from '@/types/changelogEntry'

import PlayingFireStick from '@/assets/changelog/firestick.png'
import Swimming from '@/assets/changelog/swimming.png'
import BachelorGraduation from '@/assets/changelog/bachelor_graduate.png'
import GuineaPig from '@/assets/changelog/guinea_pig.png'
import LeopardCatReservation from '@/assets/changelog/leopard_cat_reservation.png'
import FreeDiving from '@/assets/changelog/free_diving.png'
import ChildrenGrowth from '@/assets/changelog/children_growth.png'
import RissoDolphin from '@/assets/changelog/risso_dolphin.png'
import WhyYouChoosePigs from '@/assets/changelog/why_you_choose_guinea_pigs.png'
import HowToTrainPigs from '@/assets/changelog/how_to_train_your_guinea_pig.png'
import QueuingSystem from '@/assets/changelog/queuing_system.png'

const changelogEntries: changelogEntry[] = [
  { date: '2023-04' },
  {
    date: '2023-03',
    DescriptionElement: () => (
      <div className="flex flex-col items-start md:items-end">
        <p className="inline-block">
          Served as a beach cleanup <br />
          staff member with
        </p>
        <a
          href="https://rethinktw.org"
          target="_blank"
          className="inline-block aspect-[24/5] h-[2.75rem]"
          rel="noreferrer"
        >
          <img
            src="https://rethinktw.org/assets/images/logo2.png"
            alt="rethink"
            className="inline-block h-full w-full"
          />
        </a>
      </div>
    ),
    type: 'life',
    space: 40,
  },
  { date: '2023' },
  {
    date: '2022-12',
    description: 'Assigned as Project Owner of Fans Management Platform',
    type: 'tech',
  },
  {
    date: '2022-11',
    DescriptionElement: () => (
      <div className="flex flex-col items-start md:items-end">
        <p className="inline-block">
          Participated in a beach <br />
          cleanup with
        </p>
        <a
          href="https://rethinktw.org"
          target="_blank"
          className="inline-block aspect-[24/5] h-[2.75rem]"
          rel="noreferrer"
        >
          <img
            src="https://rethinktw.org/assets/images/logo2.png"
            alt="rethink"
            className="inline-block h-full w-full"
          />
        </a>
      </div>
    ),
    type: 'life',
    space: 30,
  },
  { date: '2022-11' },
  {
    date: '2022-10',
    type: 'tech',
    DescriptionElement: () => (
      <p>
        Created a guinea pig introduction website using Astro
        <img
          src={HowToTrainPigs}
          alt="how to train pigs"
          className="mt-3 aspect-[8/5] h-[6rem] rounded-lg md:h-[8rem]"
          loading="lazy"
        />
        <img
          src={WhyYouChoosePigs}
          alt="why you choose pigs"
          className="mt-3 aspect-[8/5] h-[6rem] rounded-lg md:h-[8rem]"
          loading="lazy"
        />
      </p>
    ),
    space: 250,
  },
  {
    date: '2022-08',
    description:
      'Participated in the development of a large-scale project (Fans Management Platform)',
    type: 'work',
  },
  {
    date: '2022-07',
    description: 'Started working at Big Data Co., Ltd.',
    type: 'work',
  },
  {
    date: '2022-05',
    description: 'Worked on a Smart Healthcare Proof of Concept',
    type: 'work',
  },
  {
    date: '2022-04~05',
    description:
      'Started interviewing for front-end engineer positions, received offers from 7 out of 9 companies',
    type: 'work',
  },
  {
    date: '2022-03',
    description:
      'FineReport, Node.js, PostgreSQL, and PLC for Building Information Modeling',
    type: 'tech',
  },
  { date: '2022' },
  { date: '2021-12', description: 'Began learning React', type: 'tech' },
  {
    date: '2021-10',
    description:
      'Developed a hospital queuing system using Python, Flask, SQLite, and jQuery',
    type: 'tech',
    DescriptionElement: () => (
      <img
        src={QueuingSystem}
        alt="queuing system"
        className="mt-3 aspect-[2/1] h-[6rem] rounded-lg"
        loading="lazy"
      />
    ),
    space: 150,
  },
  {
    date: '2021-08',
    type: 'tech',
    DescriptionElement: () => (
      <p>
        Started working at&nbsp;
        <a
          href="https://lightningww.com/"
          target="_blank"
          className="text-[#D33B33] underline dark:text-[#ff8997]"
          rel="noreferrer"
        >
          Lightning Tech Co., Ltd.
        </a>
      </p>
    ),
    space: 30,
  },
  { date: '2021-07', description: 'Began job interviews', type: 'work' },
  { date: '2021-05', description: 'End working at YuDaCang', type: 'work' },
  {
    date: '2021-04-20~07-24',
    description: 'Served in the military',
    type: 'life',
  },
  { date: '2021-04' },
  {
    date: '2021-02',
    description: "Graduated with master's degress from NCKU",
    type: 'academic',
  },
  {
    date: '2021-01',
    description: "Volunteered at Children's Character Growth Camp",
    type: 'life',
  },
  {
    date: '2021-01-25',
    description: 'Completed thesis defense',
    type: 'academic',
  },
  { date: '2021' },
  {
    date: '2020-07-14',
    type: 'work',
    DescriptionElement: () => (
      <p>
        Started Working part-time as a QA engineer at&nbsp;
        <a
          href="https://www.yudacang.com/"
          target="_blank"
          className="text-[#D33B33] underline dark:text-[#ff8997]"
          rel="noreferrer"
        >
          YuDaCang
        </a>
      </p>
    ),
  },
  { date: '2020-07' },
  {
    date: '2020-05',
    type: 'academic',
    DescriptionElement: () => (
      <a
        href="https://workstory.s3.amazonaws.com/assets/2758201/4658605201967232.pdf"
        target="_blank"
        className="text-[#D33B33] underline dark:text-[#ff8997]"
        rel="noreferrer"
      >
        TOEFL score of 95
      </a>
    ),
  },
  {
    date: '2020-10',
    description:
      'Volunteered at Marine Biology & Cetacean Research Center, NCKU',
    type: 'life',
    DescriptionElement: () => (
      <img
        src={RissoDolphin}
        alt="Risso dolphin"
        className="mt-3 aspect-[5/3] h-[6rem] rounded-lg md:ml-auto"
        loading="lazy"
      />
    ),
    space: 80,
  },
  {
    date: '2020-07-10~14',
    description: "Volunteered at Children's Character Growth Camp",
    type: 'life',
    DescriptionElement: () => (
      <img
        src={ChildrenGrowth}
        alt="children character growth campus"
        className="mt-3 aspect-[5/3] h-[6rem] rounded-lg md:ml-auto"
        loading="lazy"
      />
    ),
    space: 80,
  },
  {
    date: '2020-06-30~07-02',
    description: 'First Free Diving',
    type: 'life',
    DescriptionElement: () => (
      <img
        src={FreeDiving}
        alt="first free diving"
        className="mt-3 aspect-[5/3] h-[6rem] rounded-lg md:ml-auto"
        loading="lazy"
      />
    ),
    space: 80,
  },
  {
    date: '2020-03-01',
    description: 'Volunteered for leopard cat conservation',
    type: 'life',
    DescriptionElement: () => (
      <img
        src={LeopardCatReservation}
        alt="leopard cat reservation"
        className="mt-3 aspect-[5/3] h-[6rem] rounded-lg md:ml-auto"
        loading="lazy"
      />
    ),
    space: 80,
  },
  {
    date: '2020-03~05',
    description: 'Worked as an algorithm development intern at Accusense',
    type: 'work',
  },
  {
    date: '2020-01',
    description: 'Volunteered at BWForce Youth Growth Camp',
    type: 'life',
  },
  {
    date: '2020-01',
    description: 'Received Biodesign Innovation Award',
    type: 'academic',
    DescriptionElement: () => (
      <img
        src="https://workstory.s3.amazonaws.com/assets/2758203/Picture1.jpg"
        alt="biodesign award"
        className="mt-3 aspect-[2/1] h-[6rem] rounded-lg"
        loading="lazy"
      />
    ),
    space: 80,
  },
  { date: '2020' },
  {
    date: '2019-09',
    description: "Started studying for master's degree at BME Department, NCKU",
    type: 'academic',
  },
  { date: '2019' },
  {
    date: '2018-08-20',
    description: 'Got first guinea pig',
    type: 'life',
    DescriptionElement: () => (
      <img
        src={GuineaPig}
        alt="guinea-pig"
        className="mt-3 aspect-[2/1] h-[6rem] rounded-lg md:ml-auto"
        loading="lazy"
      />
    ),
    space: 80,
  },
  { date: '2018-07', description: 'TOEIC score of 960', type: 'academic' },
  {
    date: '2018-05',
    type: 'life',
    description: 'Served as graduation representative',
    DescriptionElement: () => (
      <img
        loading="lazy"
        src={BachelorGraduation}
        alt="bachelor graduation"
        className="mt-3 aspect-[13/10] h-[6rem] rounded-lg md:ml-auto"
      />
    ),
    space: 80,
  },
  {
    date: '2018-04',
    description: '',
    type: 'tech',
    DescriptionElement: () => (
      <p>
        Completed Cupoy &nbsp;
        <a
          href="https://www.cupoy.com/marathon/ml100/intro"
          target="_blank"
          className="text-[#D33B33] underline dark:text-[#ff8997]"
          rel="noreferrer"
        >
          100-day machine learning marathon challenge
        </a>
      </p>
    ),
  },
  { date: '2018' },
  {
    date: '2017-09',
    type: 'life',
    DescriptionElement: () => (
      <div className="flex items-center gap-3">
        <p>Founded the department swimming team</p>
        <img
          loading="lazy"
          src={Swimming}
          alt="swimming"
          className="mt-3 aspect-[2/3] h-[6rem] rounded-lg md:ml-auto"
        />
      </div>
    ),
    space: 70,
  },
  {
    date: '2017-07',
    description: 'Obtained Level C swimming instructor certification',
    type: 'life',
  },
  { date: '2017' },
  {
    date: '2016-04',
    description: 'Began practicing fire stick',
    DescriptionElement: () => (
      <img
        loading="lazy"
        src={PlayingFireStick}
        alt="firestick"
        className="mt-3 aspect-[7/5] h-[6rem] rounded-lg md:ml-auto"
      />
    ),
    type: 'life',
    space: 80,
  },
  { date: '2016' },
  {
    date: '2015-09',
    type: 'academic',
    space: 80,
    DescriptionElement: () => (
      <p>
        Started studying for bachelor's degree at{' '}
        <a
          href="https://bme.ncku.edu.tw/?Lang=en"
          target="_blank"
          className="text-[#D33B33] underline dark:text-[#ff8997]"
          rel="noreferrer"
        >
          BME Department, NCKU
        </a>
      </p>
    ),
  },
  {
    date: '2015-08',
    description: 'Obtained lifeguard certification',
    type: 'life',
  },
  { date: '2015' },
]

export default changelogEntries
