import React from 'react';
import type { FC } from 'react';
import { classes } from '../../../utils';

type ContentProps = {
    length?: 'short' | 'midium' | 'long';
    className?: string;
};

export const Content: FC<ContentProps> = ({ length = 'short', className }) => (
    <div className={classes('flex flex-col gap-2 p-4', className)}>
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque magni odio, dolores soluta
                exercitationem consequuntur deleniti alias repellat, perferendis nobis natus et ducimus magnam tempora
                suscipit molestiae ea id cum!
            </p>
            <p>
                Officiis pariatur aperiam nostrum quae ea modi, soluta error quidem fugiat, ad voluptatem, commodi eum.
                Eligendi fugit ad, odit adipisci magnam perspiciatis voluptas minima corrupti itaque consequuntur,
                repellendus dolores aliquam?
            </p>
            <p>
                Inventore molestias perspiciatis maiores quisquam minima repudiandae a quia delectus labore, odit,
                sapiente ex provident asperiores sint ab. Laudantium tenetur autem voluptatibus voluptates odit! Fugiat
                id sint necessitatibus beatae consequatur?
            </p>
        </>

        {length !== 'short' && (
            <>
                <p>
                    Exercitationem itaque placeat veritatis, dolore reprehenderit id, tenetur tempora doloribus ratione
                    corporis magnam animi similique assumenda omnis, hic atque consequuntur blanditiis ullam? Repellat
                    veniam dolor voluptas ducimus, libero a odio?
                </p>
                <p>
                    Tempora cupiditate doloribus facere, libero et sunt consequatur commodi. Cumque numquam deserunt
                    ullam tenetur labore officiis rem reprehenderit, quos illum sit dignissimos corrupti suscipit harum.
                    Id repellendus sit blanditiis aliquid.
                </p>
                <p>
                    Excepturi reprehenderit doloremque a atque doloribus modi? Necessitatibus ipsum laborum pariatur
                    placeat id atque, quibusdam debitis? Delectus rem cum ipsum? Molestiae natus rem quis dolores
                    sapiente. Tempora consequatur voluptatem sequi.
                </p>
                <p>
                    Odit eaque deserunt praesentium fugiat sed nihil molestias totam sapiente provident dolorum. Eius
                    architecto eum, voluptas sapiente ipsa assumenda iure unde, explicabo, pariatur magni placeat quo
                    corrupti quae non vitae?
                </p>
                <p>
                    Vel laudantium, architecto omnis ducimus dolores, nulla, molestiae deserunt at quia temporibus modi.
                    Rem reiciendis quo, dolorem libero sint neque at nostrum possimus ad illum vero ipsa perspiciatis
                    cum alias!
                </p>
            </>
        )}

        {length === 'long' && (
            <>
                <p>
                    Excepturi, suscipit. Rem ut deleniti commodi recusandae praesentium tempora ullam voluptatibus,
                    accusamus architecto nam dolorem dolor optio, culpa quos consequatur facilis iusto tenetur? Suscipit
                    doloremque veritatis ipsum aliquid sit tempora.
                </p>
                <p>
                    Nostrum architecto dolores, soluta inventore, voluptatem doloremque impedit non laboriosam, ex nam
                    nobis odio! Aliquid delectus dolore voluptatibus asperiores! Quidem aliquid eaque impedit tenetur
                    doloremque quo doloribus libero dignissimos nisi!
                </p>
                <p>
                    Nesciunt molestiae neque repudiandae, quod adipisci minima fuga placeat iusto unde voluptatibus
                    deserunt quaerat quae maxime sunt temporibus praesentium, veniam ipsam ipsum! Dicta suscipit maxime
                    deserunt nobis, ut magnam sit?
                </p>
                <p>
                    Vitae itaque temporibus dolorem, vel aut sunt quis reiciendis nobis quasi ut ex ad atque eveniet
                    dolore, libero doloribus, soluta optio omnis consectetur dolor in sed! Mollitia aspernatur est
                    ducimus!
                </p>
                <p>
                    Sint minus harum sunt optio perferendis amet, voluptate rem alias cumque architecto voluptas
                    asperiores, omnis ducimus? Officia nam itaque suscipit hic, numquam consequatur reprehenderit autem
                    vel quisquam vero voluptate laboriosam!
                </p>
                <p>
                    Nemo, ad nulla eum aut accusamus ut beatae exercitationem illo suscipit molestias? Amet a ipsum,
                    quis eveniet debitis vero error nostrum? Tempore sunt tempora tenetur. Mollitia illum tenetur
                    asperiores ex?
                </p>
                <p>
                    Atque ipsa, itaque dolor vel alias earum aut fuga nostrum velit explicabo dolorum quam, cum soluta
                    cumque iste voluptatibus aperiam inventore? Tempore quos quibusdam, sequi aliquam maiores sapiente
                    repudiandae ratione.
                </p>
                <p>
                    Libero beatae repudiandae optio cum eum tenetur iste animi dolorem quo eveniet reprehenderit aut
                    provident velit, perferendis atque tempora culpa dolores dignissimos. Minima laborum eum ipsum
                    numquam pariatur, totam cum.
                </p>
                <p>
                    Tempore odit pariatur repellendus rerum. Numquam dignissimos minima quod nesciunt perferendis
                    blanditiis provident voluptates, tenetur harum sint nobis laudantium cum explicabo labore amet
                    excepturi distinctio quidem repellat qui optio molestias?
                </p>
                <p>
                    Molestiae velit nobis accusantium, nam voluptatibus eos voluptate expedita officia quaerat modi
                    possimus rerum libero iusto quasi quibusdam incidunt vel doloribus totam. Doloribus eaque a
                    obcaecati debitis. Ex, iste blanditiis.
                </p>
                <p>
                    Ducimus numquam illum perferendis. Perferendis placeat amet, excepturi, ad quaerat molestiae impedit
                    doloremque eius recusandae similique explicabo libero obcaecati qui iure laudantium autem, sapiente
                    suscipit delectus nemo. Totam, voluptatem consequatur.
                </p>
                <p>
                    Dolores aliquam dolorum illum aut qui quia? Sapiente, facilis labore? Maxime laborum repellendus
                    fugit rem sapiente at nemo nesciunt hic, aut molestias! Maiores praesentium modi excepturi numquam
                    aut exercitationem assumenda!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam aperiam, repudiandae
                    exercitationem possimus fugiat quas veniam assumenda consectetur dicta suscipit sit? Pariatur
                    recusandae necessitatibus fuga dolores ut deserunt in!
                </p>
            </>
        )}
    </div>
);
