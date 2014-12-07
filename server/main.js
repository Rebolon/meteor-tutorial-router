Meteor.startup(function () {
    if (Citations.find().count() === 0) {
        var cites = [
                {cite: "La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.", author: "Oscar Wilde"},
                {cite: "Eclaire demain avec aujourd'hui !", author: "Elizabeth Barret Browning"},
                {cite: "Maison de paille où l'on rit vaut mieux qu'un palais où l'on pleure.", author: "Proverbe chinois"},
                {cite: "Toute l'invention consiste à faire quelque chose de rien.", author: "Jean Racine"},
                {cite: "Un seul homme armé de courage vaut une majorité.", author: "Andrew Jackson"},
                {cite: "La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi éternelle que Paris !", author: ""},
                {cite: "Un peu de jalousie éveille un amour heureux qui s'endort.", author: "Mme Deshoulières"},
                {cite: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci"},
                {cite: "Quelle noblesse d'avoir un ami, mais combien plus noble d'être un ami.", author: "Richard Wagner"},
                {cite: "Quelque délicat que l'on soit en amour, on pardonne plus de fautes que dans l'amitié.", author: "Jean de La Bruyère"},
                {cite: "Le travail, en autres avantages, a celui de raccourcir les journées et d'étendre la vie.", author: "Denis Diderot"},
                {cite: "Si nous prenons la nature pour guide, nous ne nous égarerons jamais.", author: "Cicéron"},
                {cite: "La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conquête.", author: "Georges Meredith"},
                {cite: "Jamais les mots ne manquent aux îdées ; ce sont les îdées qui manquent aux mots.", author: "Joseph Joubert"},
                {cite: "L'âge auquel on partage tout est généralement l'âge où on n'a rien.", author: "Alphonse Karr"},
                {cite: "Une erreur originale vaut mieux qu'une vérité banale.", author: "Fiodor Dostoïevski"},
                {cite: "Il n'y a pas de moyen pour polir le hérisson.", author: "Aristophane"},
                {cite: "J'aime le lit, c'est le seul endroit où, comme le chat, je puis faire le mort en respirant, tout en étant vivant.", author: "Arthur Cravan"},
                {cite: "Pour l'amour d'une rose, le jardinier devient l'esclave de mille épines.", author: "Proverbe turc"},
                {cite: "Déploie ton jeune courage, enfant ; c'est ainsi qu'on s'élève jusqu'aux astres.", author: "Virgile"},
                {cite: "Nul ne veut le bien public que quand il s'accorde avec le sien.", author: "Jean-Jacques Rousseau"},
                {cite: "On avale à pleine gorgée le mensonge qui nous flatte, et l'on boit goutte à goutte une vérité qui nous est amère.", author: "Denis Diderot"},
                {cite: "Appelons hommes de génie qui font vite ce que nous faisons lentement.", author: "Joseph Joubert"},
                {cite: "Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.", author: "Arthur Helps"},
                {cite: "Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.", author: "T. Jefferson"},
                {cite: "L'expérience est un peigne que la nature nous donne une fois que nous sommes chauves.", author: "Proverbe belge"},
                {cite: "Le rire et le sommeil sont les meilleurs remèdes du monde.", author: "Proverbe irlandais"},
                {cite: "L'enfance est un papillon qui se hâte de brûler ses blanches ailes aux flammes de la jeunesse.", author: "Aloysius Bertrand"},
                {cite: "La puissance, c'est imposer sa volonté aux autres. La force, c'est se l'imposer à soi-même.", author: "Lao Zi"},
                {cite: "Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.", author: "Stendhal"},
                {cite: "Ce qui étonne, étonne une fois, mais ce qui est admirable est de plus en plus admiré.", author: "Joseph Joubert"},
                {cite: "L'or te donne la terre, la terre te donne de l'or.", author: "Proverbe indien"},
                {cite: "Les petits cadeaux entretiennent l'amitié. Le premier qui a dit dela voulait se faire donner quelque chose.", author: "Eugène Scribe"},
                {cite: "Les premiers sentiments sont toujours les plus naturels.", author: "Madame de Sévigné"},
                {cite: "Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.", author: "René Bazin"},
                {cite: "La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conquête.", author: "Georges Meredith"},
                {cite: "La séduction suprême n'est pas d'exprimer ses sentiments. C'est de les faire soupçonner.", author: "Barbey d'Aurevilly"},
                {cite: "L'action ne doit pas être une réaction mais une création.", author: "Censier (droit féodal)"},
                {cite: "Le coeur n'a pas de maître, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.", author: "Adam Mickiewicz"},
                {cite: "Le passé est un phare, et non un port.", author: "Proverbe russe"},
                {cite: "Dans une avalanche, aucun flocon ne se sent jamais responsable.", author: "Voltaire"},
                {cite: "Toute beauté est une joie éternelle.", author: "John Keats"},
                {cite: "Quelle noblesse d'avoir un ami, mais combien plus noble d'être un ami.", author: "Richard Wagner"},
                {cite: "Pour les femmes, la douceur est le meilleur moyen d'avoir raison.", author: "Madame de Maintenon"},
                {cite: "Toute l'invention consiste à faire quelque chose de rien.", author: "Jean Racine"},
                {cite: "Quiconque a bu une tasse de chocolat résiste à une journée de voyage.", author: "J W von Goethe"},
                {cite: "Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.", author: "Epictète"},
                {cite: "Le désordre est simplement l'ordre que nous ne cherchons pas.", author: "Henri Bergson"},
                {cite: "Le défaut de l'égalité, c'est que nous ne la voulons qu'avec nos supérieurs.", author: "Henri Becquet"},
                {cite: "Papillon, ce billet doux plié cherche une adresse de fleur.", author: "Jules Renard"},
                {cite: "Si vous voulez que vos rêves se réalisent, ne dormez pas.", author: "Proverbe juif"},
                {cite: "Si les cieux pleurent, la terre vivra.", author: "Proverbe hawaiien"},
                {cite: "Tout ce que tu feras sera dérisoire, mais il est essentiel que tu le fasses.", author: "Gandhi"},
                {cite: "La rose n'a d'épines que pour celui qui veut la cueillir.", author: "Proverbe chinois"},
                {cite: "Pour savoir où l'on va, il faut savoir où l'on est.", author: "Proverbe tchadien"}
            ],
            remove = true;

        if (remove) {
            Citations.find().forEach(function(item) { Citations.remove(item._id); });
        }

        Meteor.call('addCites', cites);
    }
});