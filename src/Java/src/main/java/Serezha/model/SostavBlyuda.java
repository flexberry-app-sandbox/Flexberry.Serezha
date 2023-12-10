package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СоставБлюда
 */
@Entity(name = "IISSerezhaСоставБлюда")
@Table(schema = "public", name = "СоставБлюда")
public class SostavBlyuda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Единицы")
    private String единицы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Produkty")
    @Convert("Produkty")
    @Column(name = "Продукты", length = 16, unique = true, nullable = false)
    private UUID _produktyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Produkty", insertable = false, updatable = false)
    private Produkty produkty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Blyuda")
    @Convert("Blyuda")
    @Column(name = "Блюда", length = 16, unique = true, nullable = false)
    private UUID _blyudaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Blyuda", insertable = false, updatable = false)
    private Blyuda blyuda;


    public SostavBlyuda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public String getЕдиницы() {
      return единицы;
    }

    public void setЕдиницы(String единицы) {
      this.единицы = единицы;
    }


}