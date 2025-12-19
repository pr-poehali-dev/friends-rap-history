import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О них', icon: 'Users' },
    { id: 'history', label: 'История', icon: 'Calendar' },
    { id: 'music', label: 'Музыка', icon: 'Music' },
    { id: 'albums', label: 'Альбомы', icon: 'Disc3' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const albums = [
    {
      title: 'Number',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/d96184d0-a3f5-42fe-85ed-815670045320/files/1d6e3d11-e4ea-4ab8-86e4-8a0d63affc9b.jpg',
    },
    {
      title: 'Звезда',
      year: '2025',
      image: 'https://cdn.poehali.dev/projects/d96184d0-a3f5-42fe-85ed-815670045320/files/bc20d693-9ec1-47c2-8bf9-d02f26ea6b07.jpg',
    },
  ];

  const tracks = [
    { 
      id: 1, 
      title: 'мне п*хуй', 
      year: '2023', 
      duration: '3:24',
      author: 'collab',
      cover: 'https://cdn.poehali.dev/projects/d96184d0-a3f5-42fe-85ed-815670045320/files/1d6e3d11-e4ea-4ab8-86e4-8a0d63affc9b.jpg',
      story: 'Первый совместный трек, где ребята выразили свободу творчества и независимость от чужого мнения'
    },
    { 
      id: 2, 
      title: 'звезда', 
      year: '2025', 
      duration: '2:58',
      author: 'collab',
      cover: 'https://cdn.poehali.dev/projects/d96184d0-a3f5-42fe-85ed-815670045320/files/bc20d693-9ec1-47c2-8bf9-d02f26ea6b07.jpg',
      story: 'Хитовая новогодняя песня о достижении мечты и покорении вершин, облетела весь мир'
    },
    { 
      id: 3, 
      title: 'Королевский трон', 
      year: '2026', 
      duration: '1:52',
      author: 'unloved',
      cover: 'https://cdn.poehali.dev/files/3271492cea1734505ab48c39543cd13a (1).jpg',
      story: 'Unloved написал этот трек после серии успехов, когда почувствовал себя на вершине. Мощная композиция о власти и уверенности'
    },
    { 
      id: 4, 
      title: 'Последняя роза', 
      year: '2026', 
      duration: '1:45',
      author: 'litiy',
      cover: 'https://cdn.poehali.dev/files/9cae31e2b9e4b2b1005b70be9045e43b (1).jpg',
      story: 'Литий создал этот трек после расставания с первой любовью. Глубокий лирический рассказ о боли потери и красоте воспоминаний'
    },
    { 
      id: 5, 
      title: 'Поле маков', 
      year: '2026', 
      duration: '1:58',
      author: 'litiy',
      cover: 'https://cdn.poehali.dev/files/69cd3e03ca533873516b86406ad137bf.jpg',
      story: 'Литий написал трек в память о погибшем друге детства. Меланхоличная композиция о потере и вечной памяти'
    },
    { 
      id: 6, 
      title: 'Лабиринт любви', 
      year: '2026', 
      duration: '1:55',
      author: 'unloved',
      cover: 'https://cdn.poehali.dev/files/b7c8d72ae415e0377cc552a0ba328ae0.jpg',
      story: 'Unloved посвятил эту песню своей девушке Кристине, описывая сложный путь поиска настоящей любви среди препятствий жизни'
    },
  ];

  const socials = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'TikTok', icon: 'Music2', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Spotify', icon: 'Radio', url: '#' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const togglePlay = (trackId: string) => {
    setIsPlaying(isPlaying === trackId ? null : trackId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient">UNLOVED × ЛИТИЙ</h1>
            <div className="hidden md:flex gap-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="gap-2"
                >
                  <Icon name={section.icon as any} size={16} />
                  {section.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="hover:bg-gradient-hip-hop hover:border-transparent"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <Icon name={social.icon as any} size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hip-hop p-1">
            <div className="relative bg-background rounded-[22px] p-12 md:p-20">
              <div className="absolute inset-0 bg-gradient-hip-hop opacity-10 rounded-[22px]"></div>
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-6xl md:text-8xl font-black text-gradient animate-fade-in">
                  UNLOVED × ЛИТИЙ
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Два легендарных рэпера, покорившие мир своим творчеством в 2026-2027
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-hip-hop border-0 text-white font-semibold text-lg px-8 hover:scale-105 transition-transform"
                    onClick={() => scrollToSection('music')}
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    Слушать музыку
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 font-semibold text-lg px-8 hover:bg-muted"
                    onClick={() => scrollToSection('about')}
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gradient">О них</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-primary transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                  U
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Unloved</h3>
                  <p className="text-muted-foreground">Размахнин Вадим Григорьевич</p>
                </div>
              </div>
              <div className="space-y-2 text-lg">
                <p><span className="text-primary font-semibold">Возраст:</span> 19 лет</p>
                <p><span className="text-primary font-semibold">Статус:</span> В отношениях</p>
                <p><span className="text-primary font-semibold">Партнёр:</span> Красникова Кристина Игоревна</p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-2 hover:border-secondary transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl font-bold">
                  Л
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Литий</h3>
                  <p className="text-muted-foreground">Низоленко Артём Александрович</p>
                </div>
              </div>
              <div className="space-y-2 text-lg">
                <p><span className="text-secondary font-semibold">Возраст:</span> 17 лет</p>
                <p><span className="text-secondary font-semibold">Статус:</span> В отношениях</p>
                <p><span className="text-secondary font-semibold">Партнёр:</span> Лактионова Анна Станиславна</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-gradient">История</h2>
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 backdrop-blur border-l-4 border-l-primary hover:bg-card/70 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Начало дружбы</h3>
                  <p className="text-muted-foreground">
                    Вадим и Артём познакомились ещё детьми и быстро стали лучшими друзьями, разделяя общую любовь к музыке и хип-хопу.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-l-4 border-l-secondary hover:bg-card/70 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Первый трек</h3>
                  <p className="text-muted-foreground">
                    Выпуск дебютного трека "мне п*хуй", который стал отправной точкой их музыкальной карьеры. Песня сразу привлекла внимание молодёжной аудитории.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-l-4 border-l-accent hover:bg-card/70 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-sm">
                  24-25
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Эксперименты и рост</h3>
                  <p className="text-muted-foreground">
                    Период активного творчества, экспериментов со стилями и создания различных проектов. Выпуск альбома "Number" и других работ.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-l-4 border-l-primary hover:bg-card/70 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hip-hop flex items-center justify-center">
                  <Icon name="Star" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Прорыв - "Звезда"</h3>
                  <p className="text-muted-foreground">
                    31 декабря 2025 года выпустили хитовую песню "Звезда", которая навела шумиху ещё до релиза. После выхода под Новый год песня облетела весь мир, принеся артистам мировую известность.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-l-4 border-l-secondary hover:bg-card/70 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold">
                  2027
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Настоящее время</h3>
                  <p className="text-muted-foreground">
                    5 января 2027 года - артисты продолжают покорять вершины мировых чартов, оставаясь одними из самых популярных и обсуждаемых рэперов современности.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="music" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-gradient">Музыка</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track) => {
              const authorColor = 
                track.author === 'collab' ? 'border-emerald-500' :
                track.author === 'litiy' ? 'border-blue-500' :
                'border-purple-500';
              
              const authorBg = 
                track.author === 'collab' ? 'bg-emerald-500/20' :
                track.author === 'litiy' ? 'bg-blue-500/20' :
                'bg-purple-500/20';

              const authorName = 
                track.author === 'collab' ? 'UNLOVED × ЛИТИЙ' :
                track.author === 'litiy' ? 'ЛИТИЙ' :
                'UNLOVED';

              return (
                <Card
                  key={track.id}
                  className={`overflow-hidden bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-[1.02] border-2 ${authorColor}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <Button
                      size="icon"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform"
                      onClick={() => togglePlay(track.id.toString())}
                    >
                      <Icon
                        name={isPlaying === track.id.toString() ? 'Pause' : 'Play'}
                        size={28}
                      />
                    </Button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.year} • {track.duration}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${authorBg} border ${authorColor}`}>
                        {authorName}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {track.story}
                    </p>
                    {isPlaying === track.id.toString() && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-hip-hop w-1/3 animate-pulse"></div>
                          </div>
                          <Icon name="Volume2" size={18} className="text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="albums" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gradient">Альбомы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {albums.map((album) => (
              <Card
                key={album.title}
                className="overflow-hidden bg-card/50 backdrop-blur hover:scale-105 transition-transform border-2 hover:border-primary"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{album.title}</h3>
                      <p className="text-muted-foreground">{album.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Button className="w-full bg-gradient-hip-hop">
                    <Icon name="Play" size={18} className="mr-2" />
                    Слушать альбом
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gradient">Галерея</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-2">
              <img
                src="https://cdn.poehali.dev/files/IMG_20251219_184629_764.jpg"
                alt="Unloved и Литий на МУЗ-ТВ"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">UNLOVED × ЛИТИЙ</h3>
                <p className="text-muted-foreground">
                  На премии МУЗ-ТВ - два друга, которые вместе покорили мир музыки
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-8 text-gradient">Контакты</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Следите за нами в социальных сетях
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((social) => (
              <Button
                key={social.name}
                size="lg"
                className="bg-gradient-hip-hop hover:scale-110 transition-transform"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon name={social.icon as any} size={20} className="mr-2" />
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2027 UNLOVED × ЛИТИЙ. Все права защищены.</p>
          <p className="mt-2 text-sm">Легенды рэпа, покорившие мир</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;