package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставЗаказа
 */
@Entity(name = "IISSerezhaСоставЗаказа")
@Table(schema = "public", name = "СоставЗаказа")
public class SostavZakaza {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Napitki")
    @Convert("Napitki")
    @Column(name = "Напитки", length = 16, unique = true, nullable = false)
    private UUID _napitkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Napitki", insertable = false, updatable = false)
    private Napitki napitki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Blyuda")
    @Convert("Blyuda")
    @Column(name = "Блюда", length = 16, unique = true, nullable = false)
    private UUID _blyudaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Blyuda", insertable = false, updatable = false)
    private Blyuda blyuda;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakazy")
    @Convert("Zakazy")
    @Column(name = "Заказы", length = 16, unique = true, nullable = false)
    private UUID _zakazyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakazy", insertable = false, updatable = false)
    private Zakazy zakazy;


    public SostavZakaza() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}