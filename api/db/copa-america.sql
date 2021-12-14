--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    name character varying(20) NOT NULL,
    email character varying(50) NOT NULL,
    message character varying(500) NOT NULL
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- Name: grupos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grupos (
    id integer NOT NULL,
    name character varying(10) NOT NULL
);


ALTER TABLE public.grupos OWNER TO postgres;

--
-- Name: grupos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grupos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grupos_id_seq OWNER TO postgres;

--
-- Name: grupos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grupos_id_seq OWNED BY public.grupos.id;


--
-- Name: paises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paises (
    id integer NOT NULL,
    name character varying(25) NOT NULL,
    grupoid integer NOT NULL,
    escudo character varying(300) NOT NULL
);


ALTER TABLE public.paises OWNER TO postgres;

--
-- Name: paises_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paises_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.paises_id_seq OWNER TO postgres;

--
-- Name: paises_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paises_id_seq OWNED BY public.paises.id;


--
-- Name: partidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partidos (
    id integer NOT NULL,
    jornada integer NOT NULL,
    fecha date NOT NULL,
    rival character varying(25) NOT NULL,
    horario character varying(10) NOT NULL,
    paisid integer NOT NULL
);


ALTER TABLE public.partidos OWNER TO postgres;

--
-- Name: partidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.partidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.partidos_id_seq OWNER TO postgres;

--
-- Name: partidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.partidos_id_seq OWNED BY public.partidos.id;


--
-- Name: grupos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupos ALTER COLUMN id SET DEFAULT nextval('public.grupos_id_seq'::regclass);


--
-- Name: paises id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paises ALTER COLUMN id SET DEFAULT nextval('public.paises_id_seq'::regclass);


--
-- Name: partidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidos ALTER COLUMN id SET DEFAULT nextval('public.partidos_id_seq'::regclass);


--
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (name, email, message) FROM stdin;
Dibu	latengo@glande.co	A vos te conozco, cagón. Te gusta mirar de afuera!
elgronedeWazaaa	lta@paratodos.com	LTA hoy y siempre!
Olé	zanata@ole.com	Ché ¿estas son noticias? ¿las puedo subir a mi página?
La Scaloneta	lionel@afa.org.ar	Higuaín es el 9 en Qatar
\.


--
-- Data for Name: grupos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grupos (id, name) FROM stdin;
1	Grupo A
2	Grupo B
\.


--
-- Data for Name: paises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paises (id, name, grupoid, escudo) FROM stdin;
1	Argentina	1	/assets/img/argentina.png
2	Bolivia	1	/assets/img/bolivia.png
3	Chile	1	/assets/img/chile.png
4	Paraguay	1	/assets/img/paraguay.png
5	Uruguay	1	/assets/img/uruguay.png
6	Brasil	2	/assets/img/brasil.png
7	Colombia	2	/assets/img/colombia.png
8	Ecuador	2	/assets/img/ecuador.png
9	Perú	2	/assets/img/peru.png
10	Venezuela	2	/assets/img/venezuela.png
\.


--
-- Data for Name: partidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.partidos (id, jornada, fecha, rival, horario, paisid) FROM stdin;
1	1	2021-06-14	Chile	18.00 hs	1
2	2	2021-06-18	Uruguay	21.00 hs	1
3	3	2021-06-21	Paraguay	21.00 hs	1
4	5	2021-06-28	Bolivia	21.00 hs	1
5	1	2021-06-14	Paraguay	21.00 hs	2
6	2	2021-06-18	Chile	18.00 hs	2
7	4	2021-06-21	Uruguay	21.00 hs	2
8	5	2021-06-28	Argentina	21.00 hs	2
9	1	2021-06-14	Argentina	18.00 hs	3
10	2	2021-06-18	Bolivia	18.00 hs	3
11	3	2021-06-21	Uruguay	21.00 hs	3
12	4	2021-06-24	Paraguay	21.00 hs	3
13	1	2021-06-14	Bolivia	21.00 hs	4
14	3	2021-06-21	Argentina	21.00 hs	4
15	4	2021-06-24	Chile	21.00 hs	4
16	5	2021-06-28	Uruguay	21.00 hs	4
17	2	2021-06-18	Argentina	21.00 hs	5
18	3	2021-06-21	Chile	18.00 hs	5
19	4	2021-06-24	Bolivia	18.00 hs	5
20	5	2021-06-28	Paraguay	21.00 hs	5
21	1	2021-06-13	Venezuela	18.00 hs	6
22	2	2021-06-17	Perú	21.00 hs	6
23	4	2021-06-23	Colombia	21.00 hs	6
24	5	2021-06-27	Ecuador	18.00 hs	6
25	1	2021-06-13	Ecuador	21.00 hs	7
26	2	2021-06-17	Venezuela	18.00 hs	7
27	3	2021-06-20	Perú	21.00 hs	7
28	4	2021-06-23	Brasil	21.00 hs	7
29	1	2021-06-13	Colombia	21.00 hs	8
30	3	2021-06-20	Venezuela	18.00 hs	8
31	4	2021-06-23	Perú	18.00 hs	8
32	5	2021-06-27	Brasil	18.00 hs	8
33	2	2021-06-17	Brasil	21.00 hs	9
34	3	2021-06-20	Colombia	21.00 hs	9
35	4	2021-06-23	Ecuador	18.00 hs	9
36	5	2021-06-27	Venezuela	18.00 hs	9
37	1	2021-06-13	Brasil	18.00 hs	10
38	2	2021-06-17	Colombia	18.00 hs	10
39	3	2021-06-20	Ecuador	18.00 hs	10
40	5	2021-06-27	Perú	18.00 hs	10
\.


--
-- Name: grupos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grupos_id_seq', 2, true);


--
-- Name: paises_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paises_id_seq', 10, true);


--
-- Name: partidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.partidos_id_seq', 40, true);


--
-- Name: grupos grupos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupos
    ADD CONSTRAINT grupos_pkey PRIMARY KEY (id);


--
-- Name: paises paises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paises
    ADD CONSTRAINT paises_pkey PRIMARY KEY (id);


--
-- Name: partidos partidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partidos
    ADD CONSTRAINT partidos_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

