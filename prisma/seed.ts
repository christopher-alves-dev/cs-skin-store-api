import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const items = [
    {
      name: "Desert Eagle | Cadeia de Caracteres",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P9o-t21fj-RI_Nz2ncYbDcFNoYArYrgDql-3m08PptcjBn3tgs3Yis2GdwUJr9IfvpA/",
      category: "pistola",
      float: "0.1374",
      price: 307.04,
    },
    {
      name: "Baioneta M9 | Doppler - 4",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEobP5gVO8v11qZGilItfGe1Q_YwmG8wC9wrrojJG9v53LwCM1vHF04nndzBTigE4ecKUx0lKv9IQ3/",
      category: "faca",
      float: "0.0104",
      price: 9475.35,
    },
    {
      name: "Canivete Borboleta | Massacre",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWZU7Mxkh6fHodX23FW1rxBuMTvwLNWdcgE-NA7W_FG6yOrn1Me-vJnOzyFnuyYn-z-DyEinUkqn/",
      category: "faca",
      float: "0.1525",
      price: 8500.0,
    },
    {
      name: "Faca do Caçador | Doppler - Sapphire",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20hPbkI7PYhG5u5cRjiOXE_JbwjGu4ohQ0J3eiLYKdegY4MlzW-FK-krvoh8fo7Z_OynFquHYi5X_YmRHk0k0ZPORqm7XAHi6ycXt6/",
      category: "faca",
      float: "0.0117",
      price: 7650.0,
    },
    {
      name: "Canivete Borboleta | Manchado",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRc7cF4n-SPrduk3wO2rkJtYzr6JIfGcFBrYViCqQW-k-29hZ_vu5vPm3RjvCh3sWGdwUIL9DnJjg/",
      category: "faca",
      float: "0.2351",
      price: 6000.0,
    },
    {
      name: "Karambit | Aquecimento de Aço",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8xO-WrY7z2Ffs_RI_amDyJdCTdw45ZA2C-Fi9lObsgJPt6ZrMzXJjvSA8pSGK2tpG8Vg/",
      category: "faca",
      float: "0.4057",
      price: 5400.0,
    },
    {
      name: "AK-47 | Aquecimento de Aço",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6YOKFkD1XvZRz2rmYporw3Vfk_RZkMGD6doeUcA86Yg6C-APtyO_v0Ij84sqHVshLpA/",
      category: "rifle",
      float: "0.3174",
      price: 2998.0,
    },
    {
      name: "AK-47 | Patrocínios",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_2LyV89Wt0QewqBE6Z2-lcY6UJlRrMF7SqQTvyO7shsK5v5idn3Rn6D5iuyjFoprsug/",
      category: "rifle",
      float: "0.0392",
      price: 2014.78,
    },
    {
      name: "Faixas | Caveiras de Cobalto",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_ummJW4NE_2LyV89Wt0QewqBE6Z2-lcY6UJlRrMF7SqQTvyO7shsK5v5idn3Rn6D5iuyjFoprsug/",
      category: "luvas",
      float: "0.0380",
      price: 2392.35,
    },
    {
      name: "Luvas de Motorista | Rei Cobra",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_9K3n4WYnP76DKzZn39U18h0juDU-MKs3A2x-0ZuZmD1ddXHJwFtNArS_gfvxebp1MK9vJnKmHVivHUrtH_fgVXp1mTq6wSw/",
      category: "luvas",
      float: "0.04123",
      price: 1500.0,
    },
    {
      name: "M4A1-S | Cadeia de Caracteres",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP4jVC9vh5yYmGhJIKRdVA_NF6C-AC2yOjngJXu6MiaznU3v3Un7X-Iy0e1iEoeP_sv26JaEqwbxg/",
      category: "rifle",
      float: "0.2370",
      price: 1100.0,
    },
    {
      name: "Adesivo | pronax (Brilhante) | Cluj-Napoca 2015",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQFnaFbT8goDAWlpLNRZYuLu9FAFv2v-GIWVAvdnixoTSxfagYeLVwW0JsJdy3r-Y9Nyi2AHk8kRrYW36I4bBcBh-Pw9XO5e06Q/",
      category: "adesivo",
      float: null,
      price: 1100.0,
    },
    {
      name: "Luvas da Presa Quebrada | Jade",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAR0hwIQFTibi3JAxl3fXJfzp969C5goWYqPjkNqnQgmJe5pQhteTE4Y35gVeLrAE5NjecedPBK0Njfw7SrFTvk-3q15Xu7c-bznMwv3Zx7CyInRezgE4ZZrBq0_zNQFifAqxXXP7VYiScbn4/",
      category: "luvas",
      float: "0.1534",
      price: 739.37,
    },
    {
      name: "AWP | Linhas Vermelhas",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9Jrafxj0Iu5wh3r6V8I2i2QK3-0JlNW_0IYbAcQ5qN1-Dr1i-we27hJW_7oOJlyW4ZaUDog/",
      category: "rifle",
      float: "0.1781",
      price: 650.0,
    },
    {
      name: "Luvas de Motorista (★) | Onça Rainha",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ95t2xgYGZqO7xP7fegVRc7cF4n-SPptuh3Vfk-kA_MGylIY-ScFJoN1GE_QC7kO7oh8e7vMycmCBjvXJxtmGdwUIXkXqu2g/",
      category: "luvas",
      float: "0.3725",
      price: 550.0,
    },
    {
      name: "AWP | Asiimov",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2DMBupQn2eqVotqkiwHiqhdlMmigJtOWJwE5Zw3X8wS-yea8jcDo7c7XiSw0g89L9us/",
      category: "rifle",
      float: "0.3935",
      price: 530.0,
    },
    {
      name: "Faixas (★) | Fita Adesiva",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2DMBupQn2eqVotqkiwHiqhdlMmigJtOWJwE5Zw3X8wS-yea8jcDo7c7XiSw0g89L9us/",
      category: "luvas",
      float: "0.1945",
      price: 565.26,
    },
    {
      name: "Caixa de Armas do CS:GO",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/",
      category: "recipiente",
      float: null,
      price: 530.89,
    },
    {
      name: "Sr. Darryl Sangrento de Miami | Os Profissionais",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkbnyYuiEwTwGsZYk3euUpt6k2FK2qks9N2v1I4OVIwE4YV6FrAXrw-btm9bi63zVXqmU/",
      category: "agente",
      float: null,
      price: 522.0,
    },
    {
      name: "AK-47 (StatTrak™) | Herança",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkbnyYuiEwTwGsZYk3euUpt6k2FK2qks9N2v1I4OVIwE4YV6FrAXrw-btm9bi63zVXqmU/",
      category: "rifle",
      float: "0.6650",
      price: 521.35,
    },
    {
      name: "Faca Navaja (★) | Manchado",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrAqW1e-sZ0jtbJ8I3jkRq2-Uc6N23wI9CVdgU-NF3Y_VW9wOy-0cW8v8-cnXRj6HUqt3jVzkfhn1gSOb6eqwDI/",
      category: "faca",
      float: "0.5255",
      price: 444.61,
    },
    {
      name: "AK-47 | Névoa Frontal",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRd4cJ5nqeXoY2gjVCw_kU5ZTqiLYaRe1Q-NVzU-VG3yLq6hJHou8-fyHBn63J0-z-DyPkjgzjA/",
      category: "rifle",
      float: "0.0660",
      price: 380.0,
    },
    {
      name: "Desert Eagle | Camuflagem de Cobalto",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4cL3iwbs-UE-YG6lJITDdlRrZw2F8lS9kLrtjZDo7szMwXVhvyl2tyvfgVXp1p0Ias00/",
      category: "pistola",
      float: "0.0881",
      price: 400.0,
    },
    {
      name: "M4A1-S | Guardião",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbM8Ij8nVn6-BU5N27zJoOWcQFtZwrX-FHqwrvqjJ7ou5qanSRr6HYn5nuLmhaygAYMMLKgmooFYA/",
      category: "rifle",
      float: "0.3773",
      price: 450.0,
    },
    {
      name: "AWP (StatTrak™) | Atheris",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-HnvD8J_WGk28Eu50jj-uRrYrwiw3t8xA6Ym37d9KdIAVrYQzSqFC4xe26h5a0ot2XnmA6HhwT/",
      category: "rifle",
      float: "0.0985",
      price: 330.0,
    },
    {
      name: "M4A4 | Fogo Infernal",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09SzmIyNnuXxDLfYkWNFppwm27qYp47z3Vfl-hI6Zz3xJNDDJgFqNQvT-Vi6wuzvjJfvuJuYmiR9-n51lZK9Cxc/",
      category: "rifle",
      float: "0.1340",
      price: 263.65,
    },
    {
      name: "M4A1-S (StatTrak™) | Hiper Fera",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoHwjF2hpl1kNzqlIITBJAA3ZlnT_VHtxOm715ftu5SamHJg7yYmtivczhG3hE0ecKUx0uGnXixz/",
      category: "rifle",
      float: "0.4098",
      price: 208.0,
    },
    {
      name: "MAC-10 | Propaganda",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhJKEh_bzMrXVl1Rc7cF4n-SPrIit3gDi8kBpMTvwdo6VJAc2MlDZr1G5lenugcO8v5TMznNg6Sgq5mGdwUJeu0B0tg/",
      category: "submetralhadora",
      float: "0.2725",
      price: 180.0,
    },
    {
      name: "USP-S (StatTrak™) | Traíra",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh-TLO7rfkW5V5cR_teTE8YXghRrj_EVqMmmmJoSVJFQ6YF2E-AS8xL_q15a4ucjOznZk6HQkt37VnRHmn1gSORPm8QJe/",
      category: "pistola",
      float: "0.2985",
      price: 170.0,
    },
    {
      name: "Berettas Duplas | Piras",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3djhO_Nm4q4SKhfzLP7LWnn8fup0jiLqRrd_wiQLnrhFtNmGmJICWe1I6Yg3R-AK8lO7r18W0752YmGwj5HcFfYhkmQ/",
      category: "pistola",
      float: "0.1204",
      price: 150.31,
    },
    {
      name: "SCAR-20 (Lembrança) | Tempestade",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7ODHTi5W4867kpKEmePLPr7Vn35cppFziLrCrdT0i1bg-0tqZGqhItCdJlVqNwrU_Vm-w-i-hcLttJ3BwCR9-n51bBpqatg/",
      category: "rifle_de_precisao",
      float: "0.3066",
      price: 150.0,
    },
    {
      name: "Glock-18 (StatTrak™) | Elemental de Água",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5nqfEpdzz2Abg_BU-NW_1cNeRcQA4M1nW-AW6xOzogpPu6pTAnXplvHFw-z-DyEmuPIPI/",
      category: "pistola",
      float: "0.0762",
      price: 140.0,
    },
    {
      name: "AK-47 (StatTrak™) | Legião de Anúbis",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZgiUHvJx03bvHptT03wGy_ENsMTqiIoWRd1c_Ml-E-ge4xeft1MDpvJiY1zI97ZQiBlNb/",
      category: "rifle",
      float: "0.0985",
      price: 138.78,
    },
    {
      name: "M4A1-S | Indústrias Mecha",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLphY4OiyuOoDBcQI9Z13Ur1i-k-_ogJa1u8mfn3sxuyQh5XfZmhzlgRxPbOw7g_CACQLJK2Vmcs0/",
      category: "rifle",
      float: "0.2245",
      price: 128.36,
    },
    {
      name: "M4A4 | Desolação Espacial",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu4qt2FDsqERoMW7zIIOVIwc2YljQqQW2wenqhZ_vv8-Yn3BruiIh5i3D30vgBg2yDLA/",
      category: "rifle",
      float: "0.0690",
      price: 120.58,
    },
    {
      name: "M4A1-S | Nitro",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOlm7-Ehfb6NL7ul2hS7ctlmdbM8Ij8nVn6_BJpazj0JY_DdAc8YVCCrlm_wO3oh5W-75zAzCQxuCh24n2PzRO_1wYMMLLr38DtyA/",
      category: "rifle",
      float: "0.3592",
      price: 100.0,
    },
    {
      name: "Caixa da Operação Hidra",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY3navMJWgQtNm1ldLZzvOiZr-BlToIsZcoi-yTpdutiVW2-Es4NWjwIo-LMlhpinMS53M/",
      category: "recipiente",
      float: null,
      price: 97.02,
    },
    {
      name: "M4A1-S | Fogo de Chantico",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v-_Yn0nk36_xY_YDv6co_EcFRqMFzR_lG6xOjrgZboucjOzXM1s3Z3sXbZmRC-gwYMMLJDx5wCzw/",
      category: "rifle",
      float: "0.4618",
      price: 82.0,
    },
    {
      name: "Coronel Mangos Dabisi | Guerrilheiros",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WvPgln3_b3YzxL6Nmkq5aKhf71Pa_V2G0E7JMkju2Wpd332ge1qRY_Y23wcY-UewE5aAzQqAftk-vmgMC-uZrXiSw0kJphTlw/",
      category: "agente",
      float: null,
      price: 78.74,
    },
    {
      name: "Desert Eagle | Código Vermelho",
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5cB1g_zMu9un21XgrxBtamCnd9WWd1NoYlCGr1S2lOzm0cPq78zLznRnsilxsHjD30vghpPff7g/",
      category: "pistola",
      float: "0.4479",
      price: 80.0,
    },
  ];

  await prisma.item.createMany({
    data: items,
  });

  console.log("Seed executada com sucesso, 40 items criados.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
